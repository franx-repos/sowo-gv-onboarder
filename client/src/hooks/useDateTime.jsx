import { useState, useEffect } from "react";

const useDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
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

    setCurrentDateTime({
      date: formattedDate,
      time: formattedTime,
    });
  }, []);

  return currentDateTime;
};

export default useDateTime;
