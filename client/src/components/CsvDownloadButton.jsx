import { CSVLink } from "react-csv";
import DownloadIcon from "../assets/DownloadIcon";

const CsvDownloadButton = ({ members, formattedDate }) => {
  const headers = [
    { label: "Sowo ID", key: "sowo_id" },
    { label: "Vorname", key: "firstName" },
    { label: "Nachname", key: "lastName" },
    { label: "Haus", key: "house" },
    { label: "Ankunftszeit", key: "timeOfArrival" },
  ];

  return (
    <CSVLink
      data={members}
      headers={headers}
      filename={`sowo-gv-${formattedDate}`}
      className="bg-neutral-950 border-2 border-pink-700 hover:bg-pink-800 m-4 py-2 px-4 text-white hover:text-white rounded inline-flex items-center"
    >
      <DownloadIcon />
      CSV speichern
    </CSVLink>
  );
};

export default CsvDownloadButton;
