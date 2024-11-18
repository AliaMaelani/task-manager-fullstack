import { useState } from "react";

const LoginForm = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-left text-base-content mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="aliamaelani@gmail.com"
          className="input input-bordered w-full bg-base-300 text-base-content"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-left text-base-content mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="input input-bordered w-full bg-base-300 text-base-content"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-success w-full text-base font-medium"
        disabled={isLoading}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
