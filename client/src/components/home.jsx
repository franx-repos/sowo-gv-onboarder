import { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scanner";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8001/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error by fetch", error);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);
  return (
    <>
      <h1 className="">sowo-gv-onboarder</h1>
      <Scanner />
      <div>
        {users &&
          users.map((user) => {
            <p>{user.name}</p>;
          })}
      </div>
    </>
  );
};
export default Home;
