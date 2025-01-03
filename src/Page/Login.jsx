// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation
import InputText from "../Components/InputText.jsx";  // Correct import path
import Button from "../Components/Button.jsx";  // Correct import path
import { handleFormSubmit } from "../Utlise/Utility.jsx";  // Correct import path

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // Use useNavigate hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the utility function to validate the form
    const error = handleFormSubmit(email, password);
    
    if (error) {
      setErrorMessage(error); // Set the error message if validation fails
      return;
    }

    // If everything is fine, proceed with login logic (e.g., API call)
    console.log("Logging in with:", email, password);
    setErrorMessage(""); // Clear error if everything is okay

    // Navigate to Dashboard after successful login
    navigate("/dashboard");  // Redirect to the Dashboard page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">POS - Login</h2>
        
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Input for Email */}
          <InputText
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Input for Password */}
          <InputText
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Submit Button */}
          <Button text="Login" />
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

