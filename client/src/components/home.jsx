import { useState, useEffect } from "react";
import Scanner from "./Scanner";
import MembersList from "./MembersList";
import NavigationTop from "./NavigationTop";
import Sidebar from "./Sidebar";
import ManualInput from "./ManualInput";
import CsvDownloadButton from "./CsvDownloadButton";
import useDateTime from "../hooks/useDateTime";
import useMembers from "../hooks/useMembers";

const Home = () => {
  const { members, addMember, clearMembers } = useMembers();
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

  const style = {
    wrapper:
      "flex flex-col w-screen h-screen bg-pink-800 px-2 lg:px-5  pb-2 lg:pb-5",
    innerWrapper: "flex flex-col lg:flex-row h-full overflow-x-hidden",
    contentWrapper:
      "flex flex-col order-0 lg:order-1 h-full w-full items-center overflow-x-hidden bg-neutral-900 rounded-t-lg lg:rounded-tl-none lg:rounded-e-3xl",
    btnSection: "flex flex-col lg:flex-row w-full p2 lg:p-5 justify-evenly",
  };

  return (
    <div className={style.wrapper}>
      <NavigationTop
        setCurrentLocation={setCurrentLocation}
        currentDate={formattedDate}
      />
      <div className={style.innerWrapper}>
        <Sidebar membersCount={members.length} />
        <div className={style.contentWrapper}>
          {currentLocation === "scanner" && (
            <Scanner scanResult={scanResult} setScanResult={setScanResult} />
          )}
          {currentLocation === "members" && (
            <div className="">
              <MembersList members={members} />
              <div className={style.btnSection}>
                <CsvDownloadButton
                  members={members}
                  formattedDate={formattedDate}
                />
                <button
                  onClick={() => {
                    clearMembers();
                  }}
                  className="w-fit bg-neutral-950 border-2 border-pink-800 hover:bg-red-600 hover:border-red-600 mx-auto my-4 py-2 px-4 text-white hover:text-white rounded inline-flex items-center"
                >
                  Liste löschen
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
