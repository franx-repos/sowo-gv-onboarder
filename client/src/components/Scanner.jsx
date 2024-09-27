import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

const Scanner = ({ setScanSuccess }) => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      qrbox: {
        width: 350,
        height: 350,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      setScanResult(JSON.parse(result));
      sendScanResultToServer(result);
      setScanSuccess(true);
      setTimeout(() => setScanSuccess(false), 1500);
      scanner.stop().then(() => scanner.clear());
    }

    function error(err) {
      // console.log(err);
    }
  }, []);

  const sendScanResultToServer = async (result) => {
    const newUser = JSON.parse(result);
    try {
      const response = await axios.post("http://localhost:8001/users", {
        sowo_id: newUser.sowo_id,
        name: newUser.name,
        house: newUser.house,
        timeOfArrival: new Date().toISOString(),
      });
      console.log("Scan result saved:", response.data);
    } catch (error) {
      console.error(
        "Error saving scan result:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <div id="qr-reader"></div>

      <div className="flex flex-col ml-5">
        <p className="mb-3 text-white text-xl p-2 rounded-md bg-neutral-800">
          Sowo-Id: {scanResult?.sowo_id}
        </p>
        <p className="mb-3 text-white text-xl p-2 rounded-md bg-neutral-800">
          Name: {scanResult?.name}
        </p>
        <p className="mb-3 text-white text-xl p-2 rounded-md bg-neutral-800">
          Haus: {scanResult?.house}
        </p>
      </div>
    </>
  );
};
export default Scanner;
