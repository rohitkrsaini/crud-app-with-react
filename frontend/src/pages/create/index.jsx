import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidData = () => {
    const validEmail = email.trim().length > 0;
    const validName = name.trim().length > 0;
    const validPwd = password.trim().length > 0;

    return validEmail && validName && validPwd;
  };

  const postData = async () => {
    try {
      setIsLoading(true);

      const payload = {
        name,
        email,
        password,
      };

      await axios.post(
        "https://crud-app-with-react-1.onrender.com/user",
        payload
      );

      toast.success("User created successfully.");

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Debug, error while creating", err);
      toast.error("Error while creating user");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (isValidData()) {
      postData();
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Top Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Create User
        </h2>

        <Link
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          to="/"
        >
          Go to Users
        </Link>
      </div>

      {/* Form Card */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">
          Add New User
        </h3>

        <form onSubmit={onSubmitHandler}>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>

            <input
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>

            <input
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>

            <input
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            type="submit"
            disabled={!isValidData() || isLoading}
          >
            {isLoading ? "Loading..." : "Create User"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Create;