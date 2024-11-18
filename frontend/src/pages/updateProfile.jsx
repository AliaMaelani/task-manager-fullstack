import React, { useState } from 'react';
import { ArrowLeftIcon, UserIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import ProfileUpdateForm from '../components/editProfileUpdateForm';
import { updateProfile } from '../api/network'; 

const UpdateProfile = () => {
  const [avatar, setAvatar] = useState(localStorage.getItem('userAvatar') || '');
  const [name, setName] = useState(localStorage.getItem('userName') || '');
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = await updateProfile({ avatar, name, email, password });

      if (updatedData) {
        localStorage.setItem('userAvatar', avatar);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);

        console.log('Profile updated successfully:', updatedData);
        alert('Profile updated successfully!');

        navigate('/');
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile. Please try again later.');
    }
  };

  const handleBackToTaskPage = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      <div className="flex flex-col items-center w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Back Button */}
        <div className="flex items-center w-full mb-4 text-left">
          <button
            onClick={handleBackToTaskPage}
            className="flex items-center text-green-500 hover:text-green-600 transition duration-200"
          >
            <ArrowLeftIcon className="h-6 w-6 text-white mr-3" />
            <span className="text-xl font-semibold">Edit Profile</span>
          </button>
        </div>

        {/* Avatar Icon or Image */}
        <div className="flex justify-center mb-6">
          {avatar ? (
            <img
              src={avatar}
              alt="User Avatar"
              className="h-24 w-24 rounded-full object-cover"
            />
          ) : (
            <div className="h-24 w-24 rounded-full bg-gray-600 flex items-center justify-center text-white">
              <UserIcon className="h-16 w-16" />
            </div>
          )}
        </div>

        {/* Profile Update Form */}
        <ProfileUpdateForm
          avatar={avatar}
          name={name}
          email={email}
          onAvatarChange={setAvatar}
          onNameChange={setName}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
        />

        {/* Back to Task Page Button */}
        <button
          onClick={handleBackToTaskPage}
          className="w-full mt-4 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-200"
        >
          Back to Task Page
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
