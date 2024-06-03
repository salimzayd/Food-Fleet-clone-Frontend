import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify'
const AdminBar = () => {
  
  const handlelogout = ()=>{
    localStorage.removeItem('adminToken');
    toast.success("admin removed successfully")
  }

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#2C3539">
        <CDBSidebarHeader>
          <NavLink
            to="/adminpage"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Admin
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/adminusers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminorder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="store">ViewOrders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Admin Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add Dishes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminhome" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Admin Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminlogin" activeClassName="activeClicked" onClick={handlelogout} style={{color:"red"}}>
              <CDBSidebarMenuItem icon="door">logout</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}></CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default AdminBar;