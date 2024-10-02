import { useState, useEffect } from "react";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import { CSVLink } from "react-csv";
import Sidebar from "./Sidebar";
import ManualInput from "./ManualInput";
import MailIcon from "../assets/MailIcon";
import DownloadIcon from "../assets/DownloadIcon";
/*https://www.npmjs.com/package/react-csv */

const Home = () => {
  const [members, setMembers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("scanner");
  const [scanSuccess, setScanSuccess] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = today.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const addMember = (newMember) => {
    const isDuplicate = members.some(
      (member) => member.sowo_id === newMember.sowo_id
    );
    if (!isDuplicate) {
      setMembers((prevMembers) => [...prevMembers, newMember]);
    } else {
      console.log("Duplicate member:", newMember.sowo_id);
    }
  };

  useEffect(() => {
    if (scanResult) {
      addMember({
        sowo_id: scanResult.sowo_id,
        firstName: scanResult.firstName,
        lastName: scanResult.lastName,
        house: scanResult.house,
        timeOfArrival: formattedTime,
      });
    }
  }, [scanResult]);

  const style = {
    btn: "bg-pink-700 hover:bg-pink-800 m-4 py-2 px-4 text-white hover:text-white  rounded inline-flex items-center",
    p: "mb-3 text-white text-xl p-2 rounded-md bg-neutral-800",
  };

  const headers = [
    { label: "Sowo ID", key: "sowo_id" },
    { label: "Vorname", key: "firstName" },
    { label: "Nachname", key: "lastName" },
    { label: "Haus", key: "house" },
    { label: "Ankunftszeit", key: "timeOfArrival" },
  ];

  return (
    <div className="flex flex-col w-screen h-screen bg-pink-800 px-5 pb-5">
      <NavigationTop
        setCurrentLocation={setCurrentLocation}
        currentDate={formattedDate}
      />
      <div className="flex h-full overflow-x-hidden">
        <Sidebar membersCount={members.length} />
        <div className="flex flex-col w-full items-center overflow-x-hidden bg-neutral-900 rounded-e-3xl">
          {currentLocation === "scanner" && (
            <div className="flex my-auto">
              <div
                className={`p-5 rounded-lg ${
                  scanSuccess === true
                    ? "border-4 border-teal-700 pulse"
                    : "border-4 border-pink-700"
                }`}
              >
                <Scanner
                  setScanSuccess={setScanSuccess}
                  setScanResult={setScanResult}
                />
              </div>
              <div className="flex flex-col ml-5">
                <p className={style.p}>Sowo-Id: {scanResult?.sowo_id}</p>
                <p className={style.p}>Vorname: {scanResult?.firstName}</p>
                <p className={style.p}>Nachname: {scanResult?.lastName}</p>
                <p className={style.p}>Haus: {scanResult?.house}</p>
              </div>
            </div>
          )}
          {currentLocation === "members" && (
            <div className="flex flex-col items-center">
              <MembersList members={members} />
              <div className="flex w-full p-5 justify-evenly">
                <CSVLink
                  data={members}
                  headers={headers}
                  filename={`sowo-gv-${formattedDate}`}
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
          )}

          {currentLocation === "form" && <ManualInput addMember={addMember} />}
        </div>
      </div>
    </div>
  );
};
export default Home;
