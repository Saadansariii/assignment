import React, { useState } from "react";
import Input from "../component/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/admin-login", {
        username,
        password,
      })
      .then((response) => {
        const data = response.data;
        console.log(data._id);
        localStorage.setItem("id", JSON.stringify(data._id));
        toast.success("Login success");
        navigate("/admin-users");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 justify-center h-screen">
      <Input
        value={username}
        type={"text"}
        placeholder={"Username"}
        name={"username"}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        value={password}
        type={"password"}
        placeholder={"Password"}
        name={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-400 text-white px-4 rounded-md py-1"
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
