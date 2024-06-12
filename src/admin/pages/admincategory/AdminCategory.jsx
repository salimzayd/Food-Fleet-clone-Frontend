import React, { useEffect, useState } from 'react';
import AdminInstance from '../../../axiosinterceptors/Adminaxiosinterceptor';
import { toast } from 'react-toastify';
import AdminBar from '../../components/Adminbar';
import "./AdminCategory.css";

function AdminCategory() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [editCategoryName, setEditCategoryName] = useState("");

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await AdminInstance.get('/category');
            setCategories(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Error fetching categories");
        }
    };

    const handleAdd = async () => {
        if (!newCategory) {
            toast.error("Category name cannot be empty");
            return;
        }

        try {
            const response = await AdminInstance.post('/category', { category: newCategory });

            if (response.status === 201) {
                toast("Category added successfully");

                setNewCategory("");
                fetchCategories();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to add category");
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await AdminInstance.delete(`/category/${id}`);
            if (response.status === 200) {
                toast("Category deleted successfully");
                fetchCategories();
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete category');
        }
    };

    const handleUpdate = async (id) => {
        try {
            const response = await AdminInstance.put(`/category/${id}`, { category: editCategoryName });
            if (response.status === 200) {
                toast("Category updated successfully");
                setEditCategoryId(null);
                setEditCategoryName("");
                fetchCategories();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to update category");
        }
    };

    const handleEdit = (category) => {
        setEditCategoryId(category._id);
        setEditCategoryName(category.category);
    };

    const handleCancelEdit = () => {
        setEditCategoryId(null);
        setEditCategoryName("");
    };

    return (
        <div className="admin-category">
            <AdminBar className='admin-bar'/>
            <div className="admin-category-content">
                <h2>Admin Category</h2>
                <div className="add-category">
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Add new category"
                    />
                    <button onClick={handleAdd}>Add Category</button>
                </div>
                <ul className="category-list">
                    {categories.map((item) => (
                        <li key={item._id} className="category-item">
                            {editCategoryId === item._id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editCategoryName}
                                        onChange={(e) => setEditCategoryName(e.target.value)}
                                    />
                                    <button className="save-button" onClick={() => handleUpdate(item._id)}>Save</button>
                                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <span>{item.category}</span>
                                    <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminCategory;
