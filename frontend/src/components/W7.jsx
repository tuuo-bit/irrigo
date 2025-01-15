import React, { useContext, useState} from 'react';
import Context1 from '../context/Context1';
import Context2 from '../context/Context2';
import Context3 from '../context/Context3';

// const W7_alerts = (switch_name, switch_state) => {
//   console.log( switch_name + " is turned " + (switch_state == true ? "ON" : "OFF"));
//   return (
//     <>{switch_name} is turned {(switch_state == true ? "ON" : "OFF")}</>
//   )
// }

const W7 = () => {

  const [isChecked1, setIsChecked1] = useContext( Context1);
  const [isChecked2, setIsChecked2] = useContext( Context2);
  const [isChecked3, setIsChecked3] = useContext( Context3);

  return (
    <>
    <div className="title">
      Settings
    </div>
    <div className='content'>
      <input type="checkbox" className='switch' checked={isChecked1} onChange={ () => setIsChecked1( !isChecked1)}/>Toggle Soil Moisture Sensor
      <br />
      <input type="checkbox" className="switch" checked={isChecked2} onChange={ () => setIsChecked2( !isChecked2)}/>Toggle Temperature Sensor
      <br />
      <input type="checkbox" className='switch' checked={isChecked3} onChange={ () => setIsChecked3( !isChecked3)}/>Toggle Humidity Sensor
      <br />
    </div>
    </>
  );
};

export default W7;