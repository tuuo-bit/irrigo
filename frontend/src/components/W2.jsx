import React, { useState, useEffect} from 'react'
import axios from "axios";

// Local IP Address
const BACKEND_URL = "https://192.168.1.10";

const W2 = () => {

  // const [ output, setOutput] = useState([]);
  // useEffect(
  //   () => {
  //     fetchSensorOutput();
  //   },[]);

  // const fetchSensorOutput = async () => {
  //   try {
  //     const response = await axios.get( `${BACKEND_URL}/data`)
  //     setOutput( response);
  //   }
  //   catch (error) {
  //     console.log( "Error Fetching Sensor Info", error)
  //   };
  // };

  return (
    <>
    <div className="title">
      Sensors
    </div>
    <div className='content'>
      <img src="src\assets\hardware.jpeg" alt="" />
      {/* {output.map((data) => (
        <>{data.parameter}: {data.value}<br /></>
      ))} */}
    </div>
    </>
  );
};

export default W2;