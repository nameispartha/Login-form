// src/utils/utils.js

// Email validation regex
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  
  // Password validation (at least 6 characters)
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  // Form submission handling and validation
  export const handleFormSubmit = (email, password) => {
    if (!email || !password) {
      return "Please fill in both fields";
    }
  
    if (!validateEmail(email)) {
      return "Please enter a valid email address";
    }
  
    if (!validatePassword(password)) {
      return "Password must be at least 6 characters long";
    }
  
    return ""; // No error
  };