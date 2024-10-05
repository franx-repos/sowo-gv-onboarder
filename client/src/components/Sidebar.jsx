import { useState, useEffect } from "react";

function Sidebar({ membersCount }) {
  const [totalMembers, setTotalMembers] = useState(0);
  const hasQuorum = membersCount > totalMembers / 2;
  const majorityThreeQuarters = Math.round((totalMembers / 4) * 3);

  const style = {
    p: "mb-3 text-white text-xl p-2 rounded-md bg-neutral-800",
    btn: "bg-pink-700 hover:bg-pink-800 py-2 px-4 text-white hover:text-white rounded-md inline-flex mt-auto justify-center",
    input:
      "w-20 text-xl rounded-e-md mb-3 p-2 bg-neutral-800  placeholder-neutral-400 text-white focus:outline-none focus:ring focus:ring-pink-700 focus:rounded-md",
  };

  return (
    <div className="flex h-full bg-neutral-950 flex-col p-5 rounded-s-3xl border-r-4 border-pink-800">
      <div className="flex">
        <p className="mb-3 text-white text-xl p-2 rounded-s-md bg-neutral-800">
          insgesamt:
        </p>
        <input
          onChange={(e) => setTotalMembers(Number(e.target.value))}
          value={totalMembers}
          type="number"
          min={0}
          className={style.input}
          // placeholder="Sowo members"
        />
      </div>

      <p className={style.p}>anwesend: {membersCount}</p>
      <p
        className={`mb-3 text-white text-xl p-2 rounded-md ${
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
