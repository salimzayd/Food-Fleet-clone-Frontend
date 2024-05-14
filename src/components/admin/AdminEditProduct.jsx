import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Adminbar from "../Adminbar";
import { useNavigate } from "react-router-dom";

function AdminEdit (){
    const navigate = useNavigate()
    const {id} = useParams();
    const [formData,setFormdata] = useState({
        title:"",
        category:"",
        price:"",
        description:""
    })

    const handleChange = (e) => {

        setFormdata({...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const admintoken = localStorage.getItem('adminToken');
            console.log(id);
            const tokenWithBearer = `Bearer ${admintoken}`
            const response = await axios.put(`http://localhost:5000/api/admin/dishes/${id}`,formData,{
                headers:{Authorization:tokenWithBearer}
            })

            toast.success("dish updated successfully")
            console.log(response.data);
            // navigate(`//adminviewproduct/${id}`)

        }catch(error){
            console.error("Error uploading property",error);
            toast.error(error.message)
        }
    }
     return(
        <div className="d-flex" >
            <div>
                <Adminbar />
            </div>

            <div className="">
                <form onSubmit={handleSubmit} style={{width:"600px", height:"350px", border:"10px solid black", borderRadius:"15px",padding:"30px", marginTop:"150px", marginLeft:"280px"}}>

                    <div className="mb-3 row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
                    <div className="col-sm-10">
                    <input type="text" 
                    id="title" 
                    name="title"
                    value={formData.title} 
                    onChange={handleChange} 
                    className="col-sm-10" />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label htmlFor="category" className="col-sm-2 col-form-label">Category:</label>
                    <div className="col-sm-10">
                    <input type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="col-sm-10"/>
                    </div>
                    </div>
                    

                    {/* <div className="mb-3 row">
                    <label htmlFor="image" className="col-sm-2 col-form-label">Image:</label>
                    <div className="col-sm-10">
                    <input type="file"
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="col-sm-10"/>
                    </div>
                    </div> */}
                    
                    <div className="mb-3 row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Price:</label>
                    <div className="col-sm-10">
                    <input type="number" 
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="col-sm-10"/>
                    </div>
                    </div>
                    

                    <div className="mb-3 row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                    <div className="col-sm-10">
                    <textarea type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="col-sm-10"/>
                    </div>
                    </div>
                    
                    <div className="mb-3 row">

                    <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary">Save</button>
                    </div>    
                
                    </div>
                    
                    
                </form>
            </div>
        </div>
     )
}

export default AdminEdit;