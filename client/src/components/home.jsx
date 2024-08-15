import { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import { CSVLink } from "react-csv";
/*https://www.npmjs.com/package/react-csv */

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("scanner");
  const [scanSuccess, setScanSuccess] = useState(false);

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
  console.log(scanSuccess);

  const headers = [
    { label: "Sowo ID", key: "sowo_id" },
    { label: "Name", key: "name" },
    { label: "Haus", key: "house" },
    { label: "Ankunftszeit", key: "timeOfArrival" },
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center  overflow-x-hidden">
      <NavigationTop setCurrentLocation={setCurrentLocation} />
      {/* <h1 className="text-3xl font-bold mt-20">sowo-gv-onboarder</h1> */}

      {currentLocation === "members" ? (
        <div className="flex flex-col items-center">
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
            </svg>
            Download CSV
          </CSVLink>
        </div>
      ) : (
        <div
          className={`flex flex-col my-auto items-center p-5 rounded-lg ${
            scanSuccess === true
              ? "border-4 border-teal-600 pulse"
              : "border-4 border-pink-600"
          }`}
        >
          <Scanner setScanSuccess={setScanSuccess} />
        </div>
      )}
    </div>
  );
};
export default Home;
