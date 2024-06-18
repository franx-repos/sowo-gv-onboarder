import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      qrbox: {
        width: 350,
        height: 350,
      },
      fps: 2,
    });

    scanner.render(success, error);

    function success(result) {
      setScanResult(result);
      sendScanResultToServer(result);
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
      {scanResult ? (
        <div>Success: {scanResult}</div>
      ) : (
        <div>Scan something!</div>
      )}
    </>
  );
};
export default Scanner;
