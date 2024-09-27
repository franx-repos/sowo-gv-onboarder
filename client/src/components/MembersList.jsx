import { useState } from "react";

const MembersList = ({ members }) => {
  const style = {
    btn: "h-fit mr-5 bg-pink-700 hover:bg-pink-800 py-2 px-4 text-white hover:text-white rounded justify-center",
    table:
      "table-auto w-full border-collapse border border-neutral-500 bg-neutral-800 text-lg",
    th: "w-1/2 border border-neutral-600 font-semibold p-3 text-neutral-200 text-left bg-pink-700 hover:bg-pink-800 cursor-pointer",
    td: "border border-neutral-700 p-3 text-neutral-300 text-left",
    p: "ml-3 text-white text-lg p-2",
  };

  const [sortedMembers, setSortedMembers] = useState(members);

  const sortMembers = (key) => {
    const sortedArray = [...members].sort((a, b) => {
      if (typeof a[key] === "number" && typeof b[key] === "number") {
        return a[key] - b[key];
      }
      return a[key].localeCompare(b[key]);
    });
    setSortedMembers(sortedArray);
  };

  const tHeads = [
    { key: "sowo_id", label: "Sowo-Nr." },
    { key: "name", label: "Name" },
    { key: "house", label: "Haus" },
    { key: "timeOfArrival", label: "Ankunftszeit" },
  ];

  return (
    <div className="flex mt-10">
      <button className={style.btn} onClick={() => setSortedMembers(members)}>
        Reset
      </button>

      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            {tHeads.map((tHead) => (
              <th
                className={style.th}
                key={tHead.key}
                onClick={() => sortMembers(tHead.key)}
              >
                {tHead.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedMembers &&
            sortedMembers.map((sMember) => (
              <tr key={sMember._id}>
                <td className={style.td}>{sMember.sowo_id}</td>
                <td className={style.td}>{sMember.name}</td>
                <td className={style.td}>{sMember.house}</td>
                <td className={style.td}>{sMember.timeOfArrival}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className={style.p}>&#8592; zum Sortieren klicken</p>
    </div>
  );
};

export default MembersList;
