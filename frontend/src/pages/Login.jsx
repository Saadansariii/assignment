import React, { useState } from "react";
import Input from "../component/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/login", {
        username,
        password,
      })
      .then((response) => {
        const data = response.data;
        console.log(data._id);
        localStorage.setItem("username", JSON.stringify(data.username));
        toast.success("Login success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <div className=" w-80 border-black border-2 h-auto space-y-4 p-3 rounded-lg ">
      <Input
        value={ username }
        type={ "text" }
        placeholder={ "Username" }
        name={ "username" }
        onChange={ (e) => setUsername(e.target.value) }
      />
      <Input
        value={ password }
        type={ "password" }
        placeholder={ "Password" }
        name={ "password" }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <div className="flex justify-center">
      <button
        onClick={ handleSubmit }
        className="bg-blue-400 text-white px-4 rounded-md py-1"
      >
        Login
      </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
