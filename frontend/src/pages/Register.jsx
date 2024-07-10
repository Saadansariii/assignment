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
        localStorage.setItem("username", data.username);
        console.log(response);
        toast.success("Register successs");
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
        <Input
          value={ phone }
          type={ "text" }
          placeholder={ "Phone No" }
          name={ "phoneno" }
          onChange={ (e) => setPhone(e.target.value) }
        />
        <Input
          value={ email }
          type={ "email" }
          placeholder={ "Email" }
          name={ "email" }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <div className="flex justify-center">
        <button
          onClick={ handleSubmit }
          className="bg-blue-400 text-white px-4 rounded-md py-1"
        >
          Signin
        </button>
      </div>
      </div>
</div>
  );
};

export default Register;
