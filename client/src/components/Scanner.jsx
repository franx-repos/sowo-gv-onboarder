import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = ({ scanResult, setScanResult }) => {
  const [scanSuccess, setScanSuccess] = useState(false);

  const style = {
    p: "w-[45%] lg:w-full lg:mb-3 text-white text-center text-md md:text-lg lg:text-xl lg:text-left p-2 rounded-md bg-neutral-800",
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
    <div className="flex flex-col lg:flex-row my-auto">
      <div
        className={`p-2 m-2 lg:p-5 rounded-lg ${
          scanSuccess === true
            ? "border-4 border-teal-700 pulse"
            : "border-4 border-pink-700"
        }`}
      >
        <div id="qr-reader"></div>
      </div>
      <div className="flex flex-row lg:flex-col flex-wrap mx-auto mt-2 lg:mx-5 gap-2 justify-center">
        <p className={style.p}>Sowo-Id: {scanResult?.sowo_id}</p>
        <p className={style.p}>Vorname: {scanResult?.firstName}</p>
        <p className={style.p}>Nachname: {scanResult?.lastName}</p>
        <p className={style.p}>Haus: {scanResult?.house}</p>
      </div>
    </div>
  );
};
export default Scanner;
