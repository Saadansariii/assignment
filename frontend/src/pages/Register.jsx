import { useState } from "react";
import Input from "../component/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    axios
      .post("http://localhost:8000/register", {
        username,
        email,
        password,
        phoneNo: phone,
      })
      .then((response) => {
        const data = response.data;
        localStorage.setItem("id", data._id);
        console.log(response);
        toast.success("Register successs");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
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
        <Input
          value={phone}
          type={"text"}
          placeholder={"Phone No"}
          name={"phoneno"}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          value={email}
          type={"email"}
          placeholder={"Email"}
          name={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-400 text-white px-4 rounded-md py-1"
        >
          Signin
        </button>
      </div>
    </>
  );
};

export default Register;
