import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AdminAddProduct = () => {

    const [formData,setFormData] = useState({
        title:"",
        category:"",
        image:"",
        price:"",
        description:"",
    })

    const handleChange = (e) =>{
        const {id, value} = e.target;
        setFormData((prevData) =>({
            ...prevData,
            [id]:value
        }))
    };

    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        setFormData((prevData) =>({
            ...prevData,
            image:file,
        }))
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const adminToken = localStorage.getItem("adminToken")

            if(!adminToken){
                toast.error("Admin token not found")
                return;
            }
            const tokenWithBearer = `Bearer ${adminToken}`

            const response = await axios.post("http://localhost:5000/api/admin/product",formData,
        {
            headers:{Authorization:tokenWithBearer,
            "Content-Type":"multipart/form-data",}
        });

        if(response.status === 201){
            toast.success(response.data.message);

            setFormData({
                title:"",
                category:"",
                image:"",
                price:"",
                description:"",
            })
        }else{
            toast.error(response.data.message || "error submitting form")
        }
        }catch(error){
            console.error("error",error)
        }
    }
  return (

    <div className='container3 mt-0 ' style={{height:"670px"}}>
        <div className='card' style={{maxWidth:"800px", margin:"auto", marginTop:"50px"}} >
            <div className='card-header bg-warning text-black'>
                <h2 className='mb-0'> Add Product</h2>
            </div>
            <div className='card-body'>
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className='mb-3 row'>
                        <label htmlFor='Title' className='col-sm-2 col-form-label'>
                            Title:
                        </label>
                        <div className='col-sm-10'>
                            <input type='text' id='title' className='form-control' value={formData.title} onChange={handleChange} required></input>
                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='Category' className='col-sm-2 col-form-label'>
                            Category:
                        </label>
                        <div className='col-sm-10'>
                            <input type='text' id='category' className='form-control' value={formData.category} onChange={handleChange} required></input>
                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='image' className='col-sm-2 col-form-label'>
                            Image:
                        </label>
                            <div className='col-sm-10'>
                                <input type='file' id='image' className='form-control'  onChange={handleImageChange} required></input>
                            </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='price' className='col-sm-2 col-form-label'>
                            Price:
                        </label>
                        <div className='col-sm-10'>
                            <input type='number' id='price' className='form-control' value={formData.price} onChange={handleChange} required></input>
                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='description' className='col-sm-2 col-form-label'>
                            Description:
                        </label>
                        <div className='col-sm-10'>
                            <textarea type='text' id='description' className='form-control' value={formData.description} onChange={handleChange} required></textarea>
                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <div className='col-sm-10 offset-sm-2'>
                            <button type='submit' className='btn btn-primary'>
                                Add product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminAddProduct;