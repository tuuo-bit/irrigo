import React, { useEffect, useContext, useState} from 'react';
import Context4 from '../context/Context4';
import Context5 from '../context/Context5';
import * as tf from '@tensorflow/tfjs';
import modelFile from "../assets/tfjs_model/model.json";

const W6 = () => {
  const [ crop, setCrop] = useContext( Context4);
  const [ mode, setMode] = useContext( Context5);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const loadModel = async () => {
    const loadedModel = await tf.loadGraphModel( modelFile);
    setModel( loadedModel);
  };

  useEffect( () => {
    loadModel();
  }, []);

  const makePrediction = async () => {
    if ( model != null) {
      const inputTensor = tf.tensor2d( [ [ 75, 35, 95]]);
      const predictionTensor = model.predict( [inputTensor]);
      const predictionArray = await predictionTensor.data();
      console.log( predictionArray);
      setPrediction( predictionArray);
    }
  };

  const reset = () => {
    setPrediction(null)
    document.getElementById("dropdown").value = document.getElementById("dropdown").defaultValue
    document.getElementById("humidity").value = document.getElementById("humidity").defaultValue
    document.getElementById("temp").value = document.getElementById("temp").defaultValue
    document.getElementById("moisture").value = document.getElementById("moisture").defaultValue
  }

  const check = () => {
    var dict = {
      "crop": document.getElementById( "dropdown").value,
      "humidity": Number( document.getElementById( "humidity").value),
      "temp": Number( document.getElementById( "temp").value),
      "moisture": Number( document.getElementById( "moisture").value)
    }
    if ( dict.crop == ""){
      console.log( "Please select a crop from dropdown menu")
    }
    else {
      if ( (dict.crop == "Rice" &&  dict.temp > 19 && dict.temp < 36 && dict.humidity > 69 && dict.humidity < 91 && dict.moisture > 69 && dict.moisture < 81)
        || (dict.crop == "Wheat" &&  dict.temp > 9 && dict.temp < 26 && dict.humidity > 49 && dict.humidity < 71 && dict.moisture > 59 && dict.moisture < 81)
      || (dict.crop == "Corn" &&  dict.temp > 17 && dict.temp < 33 && dict.humidity > 49 && dict.humidity < 61 && dict.moisture > 59 && dict.moisture < 76)
    || (dict.crop == "Sugarcane" &&  dict.temp > 19 && dict.temp < 39 && dict.humidity > 69 && dict.humidity < 81 && dict.moisture > 69 && dict.moisture < 81)
  || (dict.crop == "Cotton" &&  dict.temp > 24 && dict.temp < 36 && dict.humidity > 49 && dict.humidity < 61 && dict.moisture > 49 && dict.moisture < 61)){
    setPrediction( "Optimal")
      }
      else{
        setPrediction("Not optimal")
      }
    }
    console.log( dict)
    console.log( "check clicked")
  }
  
  return (  
    <>
    <div className="title">
      <span>Analysis</span>
    </div>
    <div className='content'>
      Mode: <select defaultValue="Auto" onChange={ (e) => setMode( e.target.value)}>
        <option value="Manual">Manual</option>
        <option value="Auto">Auto</option>
      </select><br />
      { mode == "Manual" ? (
        <>
        Crop: <select  id="dropdown" defaultValue="" onChange={ (e) => setCrop(e.target.value)}>
          <option value="">Pick a Crop</option>
          <option value="Rice">Rice</option>
          <option value="Wheat">Wheat</option>
          <option value="Corn">Corn</option>
          <option value="Sugarcane">Sugarcane</option>
          <option value="Cotton">Cotton</option>
        </select><br />
        Enter Humidity: <input id="humidity" type="text" defaultValue={0}/> %<br />
        Enter Temp.: <input id="temp" type="text" defaultValue={0}/> C<br />
        Enter Moisture: <input id="moisture" type="text" defaultValue={0}/> %<br /><br />
        <button onClick={ check}>Check</button>
        <button onClick={ reset}>Reset</button>
        <br />
        {prediction != null ? (
                <>{ prediction}
                </>
            ) : ( <></>)}
        </>
        ) : (
        <>
        tfJS Keras Logistic Regression Model <br />
        <button onClick={ makePrediction}>Predict</button>
        <br />
        {prediction != null ? (
                <>{ prediction}
                </>
            ) : ( <>No value</>)}
        </>
      )}
    </div>
    </>
  );
};

export default W6;