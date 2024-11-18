import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Task from './pages/task';  // renamed Home to Task
import UpdateProfile from './pages/updateProfile';  
import { ProtectedRoute } from './components/authGuard';
import { useAuthStore } from './store/authStore';
import { useProfileStore } from './store/profileStore';
import { useEffect } from 'react';

function App() {
  const token = useAuthStore((state) => state.token);
  const getProfile = useProfileStore((state) => state.getProfile);
  const reset = useProfileStore((state) => state.reset);

  useEffect(() => {
    if (token) {
      getProfile();
    } else {
      reset();
    }
  }, [token, getProfile, reset]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes. only authenticated users can access */}
        <Route path="/" element={<ProtectedRoute isAuthenticated={!!token}><Task /></ProtectedRoute>} /> {/* updated Home to Task */}
        
        {/* Route for Update Profile */}
        <Route path="/update-profile" element={<UpdateProfile />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
