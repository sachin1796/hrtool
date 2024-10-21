import React, { useState } from "react";
import "./style.css";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login values:", values);
    axios.post('http://localhost:8000/auth/adminlogin', values)
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 loginPage">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 loginForm">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2 text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-semibold mb-2 text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
