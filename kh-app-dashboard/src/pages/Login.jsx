import { useState } from "react";
import API from "../lib/axio";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // <-- Add this line
    console.log("Login button clicked");
    try {
      console.log(
        "Attempting to login with email:",
        email,
        "and password:",
        password
      );
      const response = await API.post("/auth/login", {
        email,
        password,
      });
      console.log(response);

      console.log("Login response:", response.data);

      /* if (!response.data.token || !response.data.user) {
        alert("Login failed. Please try again.");
        return;
      } */

      // Store the token and user data in the auth store
      const { token, user } = response.data;

      login(token, user);

      alert("Login successful!");

      navigate("/home");
    } catch (error) {
      alert("Login failed:", error.response?.data?.message);
      console.log("Login error:", error.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col text-sx items-center justify-center h-screen bg-indigo-50">
      <h1 className="text-4xl text-indigo-800 font-bold mb-6 ">Login</h1>
      <form className="bg-white p-8 rounded-xl shadow-md w-96">
        <InputContainer
          label="Email"
          id="email"
          inputType="email"
          placeholder="Enter your email"
          onChange={setEmail}
        />
        <InputContainer
          label="Password"
          id="password"
          inputType="password"
          placeholder="Enter you password"
          onChange={setPassword}
        />
        <ForgotPassword />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

const ForgotPassword = () => {
  return (
    <div className="text-center my-4">
      <a href="#" className="text-blue-600 hover:underline">
        Forgot Password?
      </a>
    </div>
  );
};

const InputContainer = ({ label, id, inputType, placeholder, onChange }) => {
  return (
    <div className="mb-4 text-indigo-700">
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor="email"
      >
        {label}
      </label>
      <input
        type={inputType}
        id={id || label.toLowerCase()}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default Login;
