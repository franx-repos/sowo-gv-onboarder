import { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";

const Home = () => {
  const [users, setUsers] = useState([]);

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

  // console.log(users);

  return (
    <>
      <NavigationTop />
      <h1 className="text-3xl font-bold">sowo-gv-onboarder</h1>
      <Scanner />
      <MembersList users={users} />
    </>
  );
};
export default Home;
