const MembersList = ({ users }) => {
  const tableStyle = {
    table:
      "table-auto border-collapse border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-lg shadow-sm",
    thead: "bg-slate-50 dark:bg-slate-700",
    th: "w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-3 text-slate-900 dark:text-slate-200 text-left",
    td: "border border-slate-300 dark:border-slate-700 p-3 text-slate-500 dark:text-slate-400 text-left",
  };

  return (
    <div className="mt-10">
      <table className={tableStyle.table}>
        <thead className={tableStyle.thead}>
          <tr>
            <th className={tableStyle.th}>Sowo-Nr.</th>
            <th className={tableStyle.th}>Name</th>
            <th className={tableStyle.th}>Haus</th>
            <th className={tableStyle.th}>Ankunftszeit</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((user) => (
              <tr key={user._id}>
                <td className={tableStyle.td}>{user.sowo_id}</td>
                <td className={tableStyle.td}>{user.name}</td>
                <td className={tableStyle.td}>{user.house}</td>
                <td className={tableStyle.td}>{user.timeOfArrival}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersList;
