import { useEffect, useState } from "react";
import axios from "axios";

const ViewReport = () => {
  const [data, setData] = useState([]);
  const handleViewReport = async () => {
    const username = localStorage.getItem("username");
    const res = await axios.post("http://localhost:8000/report", { username });
    setData(res.data);
  };
  useEffect(() => {
    handleViewReport();
  }, []);
  return (
    <div className="max-w-xs mx-auto flex flex-col h-screen py-28 gap-1 border px-4 border-black">
      { console.log(data) }
      { data.map((item) => (
        <div key={ item._id } className="border-b border-black py-2">
          <p>{ item.date }</p>
          <p>Sign in { item.inTime }</p>
          <p>Sign out { item.outTime }</p>
        </div>
      )) }
    </div>
  );
};

export default ViewReport;
