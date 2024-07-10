import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer,RootTopBar } from "../component/Navs";
const Home = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [signin, setSignin] = useState(false);
  const navigate = useNavigate();

  const getTime = () => {
    const date = new Date();
    const formatedDate = format(date, "dd-MM-yyyy");
    const formatedTime = format(date, "hh:mm:ss a");
    setDate(() => formatedDate);
    setTime(() => formatedTime);
    return { formatedDate, formatedTime };
  };

  const handleSignIN = () => {
    const { formatedDate, formatedTime } = getTime();
    console.log("In time", formatedTime, formatedDate);
    const username = localStorage.getItem("username");
    console.log(username);
    axios
      .post("http://localhost:8000/in", {
        inTime: formatedTime,
        date: formatedDate,
        username,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setSignin((prev) => !prev);
  };

  const handleSignOUT = () => {
    const { formatedDate, formatedTime } = getTime();
    console.log("OUT time", formatedTime, formatedDate);
    const username = localStorage.getItem("username");
    axios
      .post("http://localhost:8000/out", {
        outTime: formatedTime,
        date: formatedDate,
        username,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setSignin((prev) => !prev);
  };

  return (
    <div>
      <RootTopBar></RootTopBar>

      <div className="max-w-xs mx-auto flex flex-col h-screen py-28 gap-1 text-center">
        <div>{ date }</div>
        <div>{ time }</div>
        <div className="h-full flex flex-col justify-between my-4">
          <button
            className="border px-4 py-1 border-black bg-gray-100"
            onClick={ signin ? handleSignOUT : handleSignIN }
          >
            { signin ? "Sign Out" : "Sign in" }
          </button>
          <button className="border px-4 py-1 border-black bg-gray-100"
          onClick={()=>{
            localStorage.removeItem("username")
            navigate("/login")

          }}
          >Logout</button>
          <button
            className="border px-4 py-1 border-black bg-gray-100"
            onClick={ () => navigate("/view-report") }
          >
            View Report
          </button>
        </div>
        <Footer />
      </div>
      </div>
  );
};

export default Home;
