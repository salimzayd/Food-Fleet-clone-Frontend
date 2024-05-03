import React,{useState,useEffect} from 'react'
import {MDBTable,MDBTableBody,MDBTableHead} from 'mdb-react-ui-kit'
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";

import Adminbar from '../Adminbar';
import axios from "axios"
import { toast } from 'react-toastify';
import { Prev } from 'react-bootstrap/esm/PageItem';

const AdminUsers = () => {

    const [data,setData]= useState([]);

    useEffect(() =>{
        const fetchusers = async()=>{

            try{

                const adminToken = localStorage.getItem('adminToken')

                if(!adminToken){
                    toast.error("admin token is not found")
                    return;
                }
                const tokenWithBearer = `Bearer ${adminToken}`

                const response = await axios.get('http://localhost:5000/api/admin/users',{
                    headers:{Authorization:tokenWithBearer,
                    "Content-Type":"multipart/form-data",}
                });

                setData(response.data.data)
            }catch(error){
                console.error('error fetching users:', error);
            }
        }

        fetchusers();
    },[])


    const handlelock = async (id,isBlocked) =>{
        
        try{
            const admintoken = localStorage.getItem('adminToken')
            
            if(!admintoken){
                toast.error('admin token is not found')
            } 
            const tokenWithBearer = `Bearer ${admintoken}`
            const url = isBlocked
            ? `http://localhost:5000/api/admin/users/unblock/${id}` : `http://localhost:5000/api/admin/users/block/${id}`

            const response = await axios.put(url,{},{headers:{Authorization:tokenWithBearer}})

            setData((Prevuser) => 
            Prevuser.map((item) =>
            item._id === id? {...item,isBlocked:!item.isBlocked}:item
        ))
            console.log(response.data.message);
            toast.success(response.data.message)
        }catch(err){
            console.log(err.message);
        }
    }
  return (
    <div className='d-flex'>
        <Adminbar />

        <div className='w-100'>
            <h1>Users List</h1>
            <div className='table-responsive'>
                <MDBTable responsive='sm' striped bordered>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>name </th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Phone number</th>
                            <th scope='col'>Active</th>              


                        </tr>
                    </MDBTableHead>

                    <MDBTableBody>
                        { data.length > 0 ? (
                        data.map((item) =>{
                            return <tr key={item._id}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                    <FaRegUser />
                                    </div>
                                </td>

                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phonenumber}</td>
                                <td>{item.isBlocked ? (<CiLock style={{color:"red", cursor:"pointer"}} onClick={() => handlelock(item._id,true)} />
                                     ):(<CiUnlock  style={{color:"green", cursor:"pointer"}} onClick={() => handlelock(item._id,false)}/>
                                    )}</td>
                                
                            </tr>
                        })) : ( <p> No users found...</p>)
                    }
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    </div>
    
  )
}

export default AdminUsers;