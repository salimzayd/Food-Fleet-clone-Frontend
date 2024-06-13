import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AdminInstance from '../../../axiosinterceptors/Adminaxiosinterceptor';
import {PulseLoader} from 'react-spinners'
import AdminBar from "../../components/Adminbar";
import { toast } from "react-toastify";
import "./EditProperty.css"

function AdminEdit2() {
    const { id } = useParams()
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            title: "",
            category: "",
            price: "",
            description: ""
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            category: Yup.string().required("Category is required"),
            price: Yup.number().required("Price is required"),
            description: Yup.string().required("Description is required")
        }),

        onSubmit: async (values) => {
            setLoading(true)
            try {
                const response = await AdminInstance.put(`/api/admin/dishes/${id}`, values)
                toast.success('Updated successfully')
                console.log(response.data);
                navigate('/adminproduct')
            } catch (error) {
                console.error("Error updating dish", error);
            }
            setLoading(false)
        }
    });

    return (
        <div className="main-itm">
            {/* <AdminBar /> */}
            <div className="container-edit">
                <h2>Edit Property</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="error">{formik.errors.title}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.category && formik.errors.category ? (
                            <div className="error">{formik.errors.category}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="error">{formik.errors.price}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="textarea"
                            id="description"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <div className="error">{formik.errors.description}</div>
                        ) : null}
                    </div>

                    <button type="submit">
                        {loading ? <PulseLoader />: <>Submit</>}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminEdit2;
