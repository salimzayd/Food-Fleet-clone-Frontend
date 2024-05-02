import React,{useState,useEffect} from 'react'
import {MDBTable,MDBTableBody,MDBTableHead} from 'mdb-react-ui-kit'
import { FaRegUser } from "react-icons/fa";
import Adminbar from '../Adminbar';
import axios from "axios"
import { toast } from 'react-toastify';

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

                const response = await axios.get('http://localhost:5000/api/admin/alluser',{
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