import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = ({ scanResult, setScanResult }) => {
  const [scanSuccess, setScanSuccess] = useState(false);

  const style = {
    p: "mb-3 text-white text-xl p-2 rounded-md bg-neutral-800",
  };

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
      // sendScanResultToServer(result);
      setScanSuccess(true);
      setTimeout(() => setScanSuccess(false), 1500);
      scanner.stop().then(() => scanner.clear());
    }

    function error(err) {
      // console.log(err);
    }
  }, []);

  return (
    <div className="flex my-auto">
      <div
        className={`p-5 rounded-lg ${
          scanSuccess === true
            ? "border-4 border-teal-700 pulse"
            : "border-4 border-pink-700"
        }`}
      >
        <div id="qr-reader"></div>
      </div>
      <div className="flex flex-col ml-5">
        <p className={style.p}>Sowo-Id: {scanResult?.sowo_id}</p>
        <p className={style.p}>Vorname: {scanResult?.firstName}</p>
        <p className={style.p}>Nachname: {scanResult?.lastName}</p>
        <p className={style.p}>Haus: {scanResult?.house}</p>
      </div>
    </div>
  );
};
export default Scanner;
