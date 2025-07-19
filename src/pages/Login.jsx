import React, { useState } from 'react';

const Login = () => {
  const [formType, setFormType] = useState('Sign Up');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-md mx-auto mt-16 gap-5 text-gray-800"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-3xl font-semibold">{formType}</h2>
        <hr className="h-[2px] w-8 bg-gray-800 border-none" />
      </div>

      {/* Name Field (only for Sign Up) */}
      {formType === 'Sign Up' && (
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="Full Name"
          required
        />
      )}

      {/* Email Field */}
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
        placeholder="Email Address"
        required
      />

      {/* Password Field */}
      <input
        type="password"
        className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
        placeholder="Password"
        required
      />

      {/* Navigation Links */}
      <div className="w-full flex justify-between text-sm text-gray-600 -mt-2">
        <p className="cursor-pointer text-red-500 hover:underline">
          Forgot Password?
        </p>
        {formType === 'Login' ? (
          <p
            onClick={() => setFormType('Sign Up')}
            className="cursor-pointer text-green-600 hover:underline"
          >
            Create an Account
          </p>
        ) : (
          <p
            onClick={() => setFormType('Login')}
            className="cursor-pointer text-blue-600 hover:underline"
          >
            Already have an account? Login
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-red-600 hover:bg-gray-800 text-white font-medium px-8 py-2 rounded mt-4 transition duration-200"
      >
        {formType === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
