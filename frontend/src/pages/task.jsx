import React, { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { useAuthStore } from "../store/authStore";
import { useTaskStore } from "../store/taskStore";
import { useProfileStore } from "../store/profileStore";
import { AddForm } from "../components/addForm";
import { TaskList } from "../components/taskList";
import ProfileSection from "../components/profileSection"; 

const Home = () => {
  const logout = useAuthStore((state) => state.logout);
  const profile = useProfileStore((state) => state.profile);
  const { tasks, getTasks } = useTaskStore();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const toggleTask = () => {
    // TODO: toggle task
  };

  const deleteTask = () => {
    // TODO: delete task
  };

  const incompleteTasks = tasks.filter((task) => !task.isDone);
  const completeTasks = tasks.filter((task) => task.isDone);

  // Handle the edit profile and sign out actions
  const handleEditProfile = () => {
    // Implement edit profile functionality
  };

  const handleSignOut = () => {
    logout();
  };

  return (
    <div className="flex space-x-4 p-6 bg-gray-900 min-h-screen">
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg flex justify-center items-center">
        {/* Render ProfileSection */}
        <ProfileSection 
          user={profile} 
          onEditProfile={handleEditProfile} 
          onSignOut={handleSignOut} 
        />
      </div>
      <div className="w-3/4 bg-gray-800 p-4 rounded-lg">
        {/* Task List and Add Task Form */}
        <AddForm />
        
        {/* Incomplete Tasks */}
        <TaskList title="Incomplete Tasks" tasks={incompleteTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        
        {/* Completed Tasks */}
        <TaskList title="Completed Tasks" tasks={completeTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Home;
