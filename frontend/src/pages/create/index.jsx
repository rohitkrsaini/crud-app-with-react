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
      await axios.post("http://localhost:3000/user", payload);
      toast.success("User created successfully.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Debug, error while creating", err);
      toast.error("Error while creating toast");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitHandler = (e) => {
    console.log("called");
    e.preventDefault();
    if (isValidData()) {
      postData();
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="flex flex-col m-8">
      <h2>Create</h2>
      <div className="flex justify-end mb-8">
        <Link className="p-2 bg-blue-400 rounded " to="/">
          Go to Users
        </Link>
      </div>
      <form className="flex-col text-center " onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          className="border-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          className="border-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          className="border-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button
          className={`bg-violet-400 p-2 rounded disabled:bg-gray-100`}
          type="submit"
          disabled={!isValidData()}
        >
          {isLoading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Create;
