import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
const Home = () => {
  const [data, setData] = useState("");
  return (
    <>
      <h1 className="text-3xl font-bold underline">sowo-gv-onboarder</h1>
      <Scanner
        onResult={(text, result) => {
          setData(text);
          console.log(result);
        }}
        onError={(error) => console.log(error?.message)}
      />
      <p>{data}</p>
    </>
  );
};
export default Home;
