import axios from "axios";
import { useEffect, useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:8000/users");
    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const getUserAttendance = async (id) => {
    const response = await axios.post("http://localhost:8000/report", { id });
    setUserDetail(response.data);
  };
  return (
    <>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col h-screen w-full py-28 gap-1 items-center text-center border-black border">
          {users.map((user) => {
            return (
              <button
                className="border-b border-black py-4"
                onClick={() => getUserAttendance(user._id)}
                key={user._id}
              >
                {user.username}
              </button>
            );
          })}
        </div>
        <div className="w-full">
          {userDetail.map((item) => (
            <div key={item._id} className="border-b border-black py-2">
              <p>{item.date}</p>
              <p>Sign in {item.inTime}</p>
              <p>Sign out {item.outTime}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
