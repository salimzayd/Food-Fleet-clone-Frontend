import React, { useState } from "react";
import {CDBSidebar,CDBSidebarContent,CDBSidebarHeader,CDBSidebarMenu,CDBSidebarMenuItem,CDBSidebarFooter} from 'cdbreact'
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify'



const Adminbar = () =>{

    const [login,setLogin] = useState(false)

    const handleLogOut = () =>{
        localStorage.removeItem('adminToken');
        setLogin(false)

        
        toast.success("admin logout successfully");
        

    }

    return(

        <div style={{display:"flex",height:"100vh",overflow:"scroll initial"}}>

            <CDBSidebar textColor="#fff" backgroundColor="#2C3539">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <NavLink
                    to="/adminpage"
                    className="text-decoration-none"
                    style={{color:"inherit"}}>
                        Admin
                    </NavLink>
                </CDBSidebarHeader>


                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink  exact to="/adminusers" activeClassName ="activeClicked">
                        <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/vieworders" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="store">ViewOrders</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/adminproduct" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="list">Admin Products</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/addproduct" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="plus">Add product</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/adminhome" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Admin Home</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/" activeClassName="activeClicked" onClick={handleLogOut} style={{color:"red"}}>
                            <CDBSidebarMenuItem icon="log" >Logout</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>


            <CDBSidebarFooter style={{textAlign:"center"}}></CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default Adminbar