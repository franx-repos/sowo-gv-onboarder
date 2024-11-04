import { useState, useEffect } from "react";

function Sidebar({ membersCount }) {
  const [totalMembers, setTotalMembers] = useState(0);
  const hasQuorum = membersCount > totalMembers / 2;
  const majorityThreeQuarters = Math.round((totalMembers / 4) * 3);

  const style = {
    p: "w-[48%] lg:w-full lg:mb-3 text-white text-md lg:text-xl p-2 rounded-md bg-neutral-800",
    btn: "bg-pink-700 hover:bg-pink-800 py-2 px-4 text-white hover:text-white rounded-md inline-flex mt-auto justify-center",
    input:
      "w-1/3 text-md lg:text-xl rounded-e-md lg:mb-3 p-2 bg-neutral-800  placeholder-neutral-400 text-white focus:outline-none focus:ring focus:ring-pink-700 focus:rounded-md",
  };

  return (
    <div className="flex flex-row lg:flex-col flex-wrap order-1 lg:order-0 h-1/6 lg:h-full bg-neutral-950 justify-center p-2 lg:p-5 rounded-b-lg lg:rounded-s-3xl lg:rounded-br-none lg:border-r-4 border-pink-800 gap-2">
      <div className="flex w-[48%] lg:w-full">
        <p className="lg:mb-3 w-2/3 text-white text-md lg:text-xl p-2 rounded-s-md bg-neutral-800">
          insgesamt:
        </p>
        <input
          onChange={(e) => setTotalMembers(Number(e.target.value))}
          value={totalMembers}
          type="number"
          min={0}
          className={style.input}
        />
      </div>
      <p className={style.p}>anwesend: {membersCount}</p>
      <p
        className={`w-[48%] lg:w-full lg:mb-3 text-white text-md lg:text-xl p-2 rounded-md ${
          hasQuorum ? "bg-teal-500" : "bg-red-500"
        }`}
      >
        Quorum: {hasQuorum ? "ja" : "nein"}
      </p>
      <p className={style.p}>3/4 Mehrheit: {majorityThreeQuarters}</p>
    </div>
  );
}

export default Sidebar;
