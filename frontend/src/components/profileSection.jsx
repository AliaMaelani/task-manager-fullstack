import React, { useState, useEffect } from 'react';
import { UserIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

const ProfileSection = ({ user = {}, onEditProfile, onSignOut }) => {
  const navigate = useNavigate(); 
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar') || '';
    setAvatar(savedAvatar);
  }, []);

  const userName = user?.name || localStorage.getItem('userName') || 'User';

  const handleEditProfile = () => {
    navigate('/update-profile'); 
  };

  return (
    <div className="flex flex-col items-center text-white">
      <div className="h-24 w-24 rounded-full bg-gray-600 flex items-center justify-center mb-4">
        {avatar ? (
          <img
            src={avatar}
            alt="User Avatar"
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <UserIcon className="h-16 w-16 text-white" />
        )}
      </div>

      <h2 className="text-xl mb-2">Welcome Back, {userName}!</h2>

      {/* Edit Profile Button */}
      <button
        onClick={handleEditProfile}
        className="mb-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
      >
        Edit Profile
      </button>
      
      <button
        onClick={onSignOut}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileSection;
