import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { FaRegUser } from "react-icons/fa";
import { CiLock, CiUnlock } from "react-icons/ci";
import Adminbar from '../../components/Adminbar';
import axios from "axios";
import { toast } from 'react-toastify';
import AdminInstance from '../../../axiosinterceptors/Adminaxiosinterceptor';
import './Adminusers.css'; // Ensure this file contains the updated CSS

const AdminUsers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const adminToken = localStorage.getItem('adminToken');
                if (!adminToken) {
                    toast.error("Admin token is not found");
                    return;
                }
            
                const response = await AdminInstance.get('/api/admin/users');

                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handlelock = async (id, isBlocked) => {
        try {
            const action = isBlocked ? "unblock" : "block";
            const admintoken = localStorage.getItem('adminToken');
            
            if (!admintoken) {
                toast.error('Admin token is not found');
                return;
            }
            
            const tokenWithBearer = `Bearer ${admintoken}`;
            const url = `http://localhost:5000/api/admin/users/block/${id}?action=${action}`;

            const response = await axios.patch(url, {}, {
                headers: { Authorization: tokenWithBearer }
            });

            setData((prevUsers) => 
                prevUsers.map((item) =>
                    item._id === id ? { ...item, isBlocked: !item.isBlocked } : item
                )
            );

            toast.success(response.data.message);
        } catch (err) {
            toast.error('Error in handleLock');
        }
    };

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
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Phone number</th>
                                <th scope='col'>Active</th>
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
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>
                                            {item.isBlocked ? (
                                                <CiLock 
                                                    style={{ color: "red", cursor: "pointer" }} 
                                                    onClick={() => handlelock(item._id, true)} 
                                                />
                                            ) : (
                                                <CiUnlock 
                                                    style={{ color: "green", cursor: "pointer" }} 
                                                    onClick={() => handlelock(item._id, false)} 
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <p>No users found...</p>
                            )}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
