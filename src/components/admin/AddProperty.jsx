import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import AdminInstance from '../axiosinterceptors/Adminaxiosinterceptor';
import { BarLoader } from 'react-spinners'
import { toast } from 'react-toastify';
import './AddProperty.css'

const AddProperty = () => {
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        category: Yup.string().required("Category is Required"),
        image: Yup.mixed().required("Image is Required"),
        price: Yup.number().required("Price is Required"),
        description: Yup.string().required("Description is Required")
    });

    const handleSubmit = async (formData, { resetForm }) => {
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("category", formData.category);
            formDataToSend.append("image", formData.image);
            formDataToSend.append("price", formData.price);
            formDataToSend.append("description", formData.description);

            const response = await AdminInstance.post("/product", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 201) {
                toast.success(response.data.message);
                resetForm();
            } else {
                toast.error(response.data.message || "Error submitting form");
            }
        } catch (error) {
            console.error("error", error);
            if (error.response && error.response.status === 401) {
                toast.error("Unauthorized, check your authentication credentials");
            } else {
                toast.error("An error occurred");
            }
        }

        setLoading(false);
    };

    return (
        <div className='main'>
            <div className='header'>
                <h2>Add Dish</h2>
            </div>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    image: null,
                    price: '',
                    description: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <div>
                            <label htmlFor="title">Title</label>
                            <Field type="text" name="title" />
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <Field type="text" name="category" />
                            <ErrorMessage name="category" component="div" />
                        </div>
                        <div>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" onChange={(event) => {
                                setFieldValue("image", event.currentTarget.files[0]);
                            }} />
                            <ErrorMessage name="image" component="div" />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <Field type="number" name="price" />
                            <ErrorMessage name="price" component="div" />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <Field as="textarea" name="description" />
                            <ErrorMessage name="description" component="div" />
                        </div>
                        <div>
                            <button type="submit" disabled={loading}>
                                {loading ? <BarLoader /> : "Submit"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddProperty;
