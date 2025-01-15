import React, { useContext} from 'react'
import Context1 from '../context/Context1';
import Context2 from '../context/Context2';
import Context3 from '../context/Context3';
import Context4 from '../context/Context4';
import Context5 from '../context/Context5';

const W4 = () => {

  const [isChecked1, setIsChecked1] = useContext( Context1);
  const [isChecked2, setIsChecked2] = useContext( Context2);
  const [isChecked3, setIsChecked3] = useContext( Context3);
  const [crop, setCrop] = useContext( Context4);
  const [ mode, setMode] = useContext( Context5);

  // useEffect(() => {
  //   W7_alerts
  // }, []);

  return (
    <>
      <div className='title'>
        Notifications
      </div>
      <div className='content'>
        Soil Moisture Sensor: { isChecked1 ? ("ON") : ("OFF")} <br />
        Temperature Sensor: { isChecked2 ? ("ON") : ("OFF")} <br />
        Humidity Sensor: { isChecked3 ? ("ON") : ("OFF")} <br />
        Choice of Crop: { mode == "Manual" ? crop : "None"} <br />
        Mode: { mode} <br />
      </div>
    </>
  );
};

export default W4;