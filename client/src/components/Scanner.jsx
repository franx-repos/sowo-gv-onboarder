import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = ({ setScanSuccess, setScanResult }) => {
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
    <>
      <div id="qr-reader"></div>
    </>
  );
};
export default Scanner;
