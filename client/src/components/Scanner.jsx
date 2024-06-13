import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div id="qr-reader"></div>
      {/* {scanResult ? (
        <div>Success: {scanResult}</div>
      ) : (
        <div>Scan something!</div>
      )} */}
      <p>{scanResult}</p>
    </>
  );
};
export default Scanner;
