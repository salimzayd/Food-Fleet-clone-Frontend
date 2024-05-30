import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import './UserProfile.css';
import {ScaleLoader} from 'react-spinners'
import userInstance from './axiosinterceptors/UserAxiosInterceptor';

const UserProfile = () => {
  const [loading,setLoading] = useState(false)
  const [user, setUser] = useState({
    image: '',
    name: '',
    email: '',
    phonenumber: ''
  });

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleGet = async () => {
      try {
        
        const userId = localStorage.getItem('_id');
        const response = await userInstance.get(`/user/${userId}`);

        const userData = response.data?.data || {};
        setUser({
          image: userData.image || '',
          name: userData.name || '',
          email: userData.email || '',
          phonenumber: userData.phonenumber || ''
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    handleGet();
  }, []);

  const handleUpdate = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      
      const userId = localStorage.getItem('_id');

      const formData = new FormData();
      formData.append('name', user.name);
      formData.append('email', user.email);
      formData.append('phonenumber', user.phonenumber);
      if (image) {
        formData.append('image', image);
      }

      const response = await userInstance.put(`/profile/${userId}`, formData );

      const updatedUserData = response.data?.data || {};
      setUser((prevUser) => ({
        ...prevUser,
        image: updatedUserData.image || '',
        name: updatedUserData.name || '',
        email: updatedUserData.email || '',
        phonenumber: updatedUserData.phonenumber || ''
      }));

      toast.success('Profile updated successfully');
    } catch (err) {
      console.error('Error updating profile', err);
    }
    setLoading(false)
  };

  // const handleDelete = async () => {
  //   try {
  //     const userId = localStorage.getItem('_id');
  //     await userInstance.delete(`/profile/${userId}`);

  //     toast('Account deleted successfully');
  //     window.location.href = '/login';
  //     localStorage.removeItem('name')
  //   } catch (err) {
  //     console.error('Error deleting account', err);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUser((prevUser) => ({
          ...prevUser,
          image: reader.result,
        }));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='form-container'>
      <h2>Profile</h2>
      <div className='photo-container' onClick={handleImageClick}>
        <img src={user.image} alt='profile' className='profile-photo' />
      </div>

      <form className='form' onSubmit={handleUpdate}>
        <input type='text' name='name' placeholder='Name' value={user.name} onChange={handleChange} />
        <input type='email' name='email' placeholder='Email' value={user.email} onChange={handleChange} />
        <input type='tel' name='phonenumber' placeholder='Phone Number' value={user.phonenumber} onChange={handleChange} />
        <input type='file' name='image' ref={fileInputRef} style={{ display: "none" }} onChange={handleImageChange} />
        <button type='submit' className='submit-button' >
          {loading ? (
            <ScaleLoader color='#6DC5D1' loading={loading} style={{alignItems:"center"}}/>
          ):<>Update</>}
        </button>
      </form>
      {/* <button onClick={handleDelete} className='delete-button'>Delete Account</button> */}
    </div>
  );
}

export default UserProfile;
