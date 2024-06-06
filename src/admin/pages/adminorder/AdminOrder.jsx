import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminInstance from '../../../axiosinterceptors/Adminaxiosinterceptor';
import AdminBar from '../../components/Adminbar';
import { FaRegUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

const AdminOrder = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchorder = async () =>{
            try{
                const adminToken = localStorage.getItem('adminToken');
                if (!adminToken) {
                    toast.error("Admin token is not found");
                    return;
                }
                const response = await AdminInstance.get('/order')
                setData(response.data.data)
                console.log(response.data.data); 
            }catch(error){
                console.error("error fetching order data",error);
            }
        }
        fetchorder()
    },[])
  return (
    <>
    <div className='d-flex'>
        <AdminBar />
        <div className='w-100'>
            <h1>Orders List</h1>
            <div className='table-responsive'>
                <MDBTable responsive='sm' striped bordered>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Product</th>
                            <th scope='col'>Paid Amount</th>
                            <th scope='col'>Date</th>
                        </tr>
                    </MDBTableHead>

                    <MDBTableBody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                        <FaRegUser />
                                        </div>
                                    </td>

                                    <td>{item.usermodel.name}</td>
                                    <td>{item.products}</td>
                                    <td>{item.total_amount}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))
                        ):(<p> No Orders Found</p>)}
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminOrder