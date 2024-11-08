import { useState, useEffect } from "react";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import Sidebar from "./Sidebar";
import ManualInput from "./ManualInput";
import CsvDownloadButton from "./CsvDownloadButton";
import useDateTime from "../hooks/useDateTime";
import useMembers from "../hooks/useMembers";
/*https://www.npmjs.com/package/react-csv */

const Home = () => {
  const { members, addMember } = useMembers();
  const [currentLocation, setCurrentLocation] = useState("scanner");
  const [scanResult, setScanResult] = useState(null);
  const { date: formattedDate, time: formattedTime } = useDateTime();

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

  return (
    <div className="flex flex-col w-screen h-screen bg-pink-800 px-2 lg:px-5  pb-2 lg:pb-5">
      <NavigationTop
        setCurrentLocation={setCurrentLocation}
        currentDate={formattedDate}
      />
      <div className="flex flex-col lg:flex-row h-full overflow-x-hidden">
        <Sidebar membersCount={members.length} />
        <div className="flex flex-col order-0 lg:order-1 h-full w-full items-center overflow-x-hidden bg-neutral-900 rounded-t-lg lg:rounded-tl-none lg:rounded-e-3xl">
          {currentLocation === "scanner" && (
            <Scanner scanResult={scanResult} setScanResult={setScanResult} />
          )}
          {currentLocation === "members" && (
            <div className="flex flex-col items-center">
              <MembersList members={members} />
              <div className="flex flex-col lg:flex-row w-full p2 lg:p-5 justify-evenly">
                <CsvDownloadButton
                  members={members}
                  formattedDate={formattedDate}
                />
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
