import { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import { CSVLink } from "react-csv";
/*https://www.npmjs.com/package/react-csv */

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

  console.log(users);

  const headers = [
    { label: "Sowo ID", key: "sowo_id" },
    { label: "Name", key: "name" },
    { label: "Haus", key: "house" },
    { label: "Ankunftszeit", key: "timeOfArrival" },
  ];

  return (
    <>
      <NavigationTop />
      {/* <h1 className="text-3xl font-bold mt-20">sowo-gv-onboarder</h1> */}
      <Scanner />
      <MembersList users={users} />

      <CSVLink
        data={users}
        headers={headers}
        filename={"my-file.csv"}
        className="bg-blue-500 hover:bg-blue-700 m-4 py-2 px-4 text-white hover:text-white font-bold rounded inline-flex items-center"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>{" "}
        Download CSV
      </CSVLink>
    </>
  );
};
export default Home;
