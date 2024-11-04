import { useState, useEffect } from "react";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import { CSVLink } from "react-csv";
import Sidebar from "./Sidebar";
import ManualInput from "./ManualInput";
import useDateTime from "../hooks/useDateTime";
import MailIcon from "../assets/MailIcon";
import DownloadIcon from "../assets/DownloadIcon";
/*https://www.npmjs.com/package/react-csv */

const Home = () => {
  const [members, setMembers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("scanner");

  const [scanResult, setScanResult] = useState(null);
  const { date: formattedDate, time: formattedTime } = useDateTime();

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
    btn: "bg-neutral-950 border-2 border-pink-700 hover:bg-pink-800 m-4 py-2 px-4 text-white hover:text-white  rounded inline-flex items-center",
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
      <div className="flex flex-col lg:flex-row h-full overflow-x-hidden">
        <Sidebar membersCount={members.length} />
        <div className="flex flex-col order-0 lg:order-1 h-full w-full items-center overflow-x-hidden bg-neutral-900 rounded-t-3xl lg:rounded-tl-none lg:rounded-e-3xl">
          {currentLocation === "scanner" && (
            <Scanner scanResult={scanResult} setScanResult={setScanResult} />
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
