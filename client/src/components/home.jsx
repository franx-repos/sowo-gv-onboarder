import { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import { CSVLink } from "react-csv";
/*https://www.npmjs.com/package/react-csv */

const Home = () => {
  const [members, setMembers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("scanner");
  const [scanSuccess, setScanSuccess] = useState(false);
  const [hasQuorum, setHasQuorum] = useState(false);

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

  // console.log(members);
  // console.log(scanSuccess);

  const headers = [
    { label: "Sowo ID", key: "sowo_id" },
    { label: "Name", key: "name" },
    { label: "Haus", key: "house" },
    { label: "Ankunftszeit", key: "timeOfArrival" },
  ];

  return (
    <div className="flex flex-col w-screen h-screen bg-pink-700 px-5 pb-5">
      <NavigationTop setCurrentLocation={setCurrentLocation} />
      <div className="w-full h-full flex flex-col items-center  overflow-x-hidden bg-neutral-900 rounded-3xl">
        <div className="absolute h-[calc(100%-6.25rem)] left-0 bg-neutral-950 ml-5 flex flex-col p-5 rounded-s-3xl">
          <input
            type="number"
            min={0}
            className="w-44 text-xl rounded-md mb-3 p-2 bg-neutral-800  placeholder-neutral-400 text-white focus:border-pink-700"
            placeholder="Sowo members"
          />

          <p className="mb-3 text-white text-xl p-2 rounded-md bg-neutral-800">
            anwesend: {members.length}
          </p>
          <p
            className={`mb-3 text-white text-xl p-2 rounded-md ${
              hasQuorum === true ? "bg-green-500" : "bg-red-500"
            }`}
          >
            Quorum: {hasQuorum === true ? "ja" : "nein"}
          </p>
          <p className="mb-3 text-white text-xl p-2 rounded-md bg-neutral-800">
            3/4 Mehrheit: {Math.round((members.length / 4) * 3)}
          </p>
          <button className="bg-pink-700 hover:bg-pink-800 py-2 px-4 text-white hover:text-white  rounded inline-flex mt-auto justify-center">
            Manuelle Eingabe
          </button>
        </div>
        {currentLocation === "members" ? (
          <div className="flex flex-col items-center">
            <MembersList members={members} />
            <div className="p-5">
              <CSVLink
                data={members}
                headers={headers}
                filename={"my-file.csv"}
                className="bg-pink-700 hover:bg-pink-800 m-4 py-2 px-4 text-white hover:text-white  rounded inline-flex items-center"
              >
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                CSV speichern
              </CSVLink>
              <button className="bg-pink-700 hover:bg-pink-800 m-4 py-2 px-4 text-white hover:text-white  rounded inline-flex items-center">
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path
                      d="M 80.89 78.772 H 9.11 c -5.023 0 -9.11 -4.087 -9.11 -9.11 V 20.338 c 0 -5.023 4.087 -9.11 9.11 -9.11 h 71.78 c 5.023 0 9.11 4.087 9.11 9.11 v 49.324 C 90 74.686 85.913 78.772 80.89 78.772 z M 9.11 17.228 c -1.715 0 -3.11 1.396 -3.11 3.11 v 49.324 c 0 1.715 1.395 3.11 3.11 3.11 h 71.78 c 1.715 0 3.11 -1.396 3.11 -3.11 V 20.338 c 0 -1.715 -1.396 -3.11 -3.11 -3.11 H 9.11 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 45 55.427 c -5.408 0 -10.599 -2.292 -14.242 -6.288 L 2.493 18.125 l 4.435 -4.042 l 28.265 31.013 c 2.545 2.792 6.028 4.331 9.807 4.331 c 3.779 0 7.262 -1.538 9.808 -4.331 l 28.266 -31.013 l 4.434 4.042 L 59.241 49.138 C 55.599 53.135 50.408 55.427 45 55.427 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <rect
                      x="-0.96"
                      y="57.16"
                      rx="0"
                      ry="0"
                      width="38.98"
                      height="6"
                      transform=" matrix(0.7053 -0.7089 0.7089 0.7053 -37.1881 30.8639) "
                    />
                    <rect
                      x="68.47"
                      y="40.67"
                      rx="0"
                      ry="0"
                      width="6"
                      height="38.98"
                      transform=" matrix(0.709 -0.7053 0.7053 0.709 -21.628 67.9146) "
                    />
                  </g>
                </svg>
                CSV mailen
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col my-auto items-center p-5 rounded-lg ${
              scanSuccess === true
                ? "border-4 border-teal-700 pulse"
                : "border-4 border-pink-700"
            }`}
          >
            <Scanner setScanSuccess={setScanSuccess} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
