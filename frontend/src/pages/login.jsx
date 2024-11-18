import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";

const Login = () => {
  const { login, token, isLoading } = useAuthStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLoginSubmit = async ({ email, password }) => {
    console.log(email, password);
    await login({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-6 py-12 w-1/4 bg-base-200 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-green-500">Voca</span>
          <span className="text-white">Task</span>
        </h2>
        <LoginForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Login;
