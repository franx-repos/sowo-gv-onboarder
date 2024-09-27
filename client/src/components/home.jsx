import { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import { CSVLink } from "react-csv";
import Sidebar from "./Sidebar";
import MailIcon from "../assets/MailIcon";
import DownloadIcon from "../assets/DownloadIcon";
/*https://www.npmjs.com/package/react-csv */

const Home = () => {
  const [members, setMembers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("scanner");
  const [scanSuccess, setScanSuccess] = useState(false);
  // const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8001/users");
        setMembers(response.data);
      } catch (error) {
        console.error("Error by fetch", error);
      }
    };
    fetchUsers();
  }, []);

  const style = {
    btn: "bg-pink-700 hover:bg-pink-800 m-4 py-2 px-4 text-white hover:text-white  rounded inline-flex items-center",
  };

  const headers = [
    { label: "Sowo ID", key: "sowo_id" },
    { label: "Name", key: "name" },
    { label: "Haus", key: "house" },
    { label: "Ankunftszeit", key: "timeOfArrival" },
  ];

  return (
    <div className="flex flex-col w-screen h-screen bg-pink-800 px-5 pb-5">
      <NavigationTop setCurrentLocation={setCurrentLocation} />
      <div className="flex h-full overflow-x-hidden">
        <Sidebar membersCount={members.length} />
        <div className="flex flex-col w-full items-center overflow-x-hidden bg-neutral-900 rounded-e-3xl">
          {currentLocation === "members" ? (
            <div className="flex flex-col items-center">
              <MembersList members={members} />
              <div className="flex w-full p-5 justify-evenly">
                <CSVLink
                  data={members}
                  headers={headers}
                  filename={"my-file.csv"}
                  className={style.btn}
                >
                  <DownloadIcon />
                  CSV speichern
                </CSVLink>
                <button className={style.btn}>
                  <MailIcon />
                  CSV mailen
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`flex my-auto mr-40 items-center p-5 rounded-lg ${
                scanSuccess === true
                  ? "border-4 border-teal-700 pulse"
                  : "border-4 border-pink-700"
              }`}
            >
              <Scanner
                setScanSuccess={setScanSuccess}
                // setScanResult={setScanResult}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
