import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import AdminInstance from '../axiosinterceptors/Adminaxiosinterceptor';
import {SyncLoader} from "react-spinners"

const AdminAddProduct = () => {

    const [loading,setLoading] = useState(false)
    const [formData,setFormData] = useState({
        title:"",
        category:"",
        image:"",
        price:"",
        description:"",
    })
    const [error,setError] = useState({})

    const validform = () =>{
        let error = {}
        let isvalid = true;

        if(!formData.title.trim()){
            error.name = 'title is required';
            isvalid = false
        }

        if(!formData.category.trim()){
            error.name = 'category is required';
            isvalid = false
        }

        // if(!formData.image.trim()){
        //     error.name = 'image is required';
        //     isvalid = false
        // }

        if(!formData.price.trim()){
            error.name= 'price is required'
            isvalid= false
        }

        if(!formData.description.trim()){
            error.name = 'description is required';
            isvalid = false
        }

            setError(error);
            return isvalid;
        
    }

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
        setLoading(true)
        if(validform()){
            try{
    
                const response = await AdminInstance.post("/product",formData,
            {
                headers:{
                "Content-Type":"multipart/form-data",
            },
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
            setLoading(false)
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
                            <input type='text' id='title' className='form-control' value={formData.title} onChange={handleChange} required ></input>
                            {error.title && <div className='error'>{error.title}</div>}
                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='Category' className='col-sm-2 col-form-label'>
                            Category:
                        </label>
                        <div className='col-sm-10'>
                            <input type='text' id='category' className='form-control' value={formData.category} onChange={handleChange} required></input>
                            {error.category && <div className='error'>{error.category}</div>}

                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='image' className='col-sm-2 col-form-label'>
                            Image:
                        </label>
                            <div className='col-sm-10'>
                                <input type='file' id='image' className='form-control'  onChange={handleImageChange} required></input>
                            {error.image && <div className='error'>{error.image}</div>}

                            </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='price' className='col-sm-2 col-form-label'>
                            Price:
                        </label>
                        <div className='col-sm-10'>
                            <input type='number' id='price' className='form-control' value={formData.price} onChange={handleChange} required></input>
                            {error.price && <div className='error'>{error.price}</div>}

                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor='description' className='col-sm-2 col-form-label'>
                            Description:
                        </label>
                        <div className='col-sm-10'>
                            <textarea type='text' id='description' className='form-control' value={formData.description} onChange={handleChange} required></textarea>
                            {error.description && <div className='error'>{error.description}</div>}

                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <div className='col-sm-10 offset-sm-2'>
                            {/* <button type='submit' className='btn btn-primary'>Add product</button> */}
                            <button type='submit' className='btn btn-primary' style={{minWidth:'100px'}}>
                                {loading ? (
                                    <SyncLoader color='#fff' loading={loading} size={5} style={{alignItems:"center"}} />
                                ) : <>Add product</>
                                }
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