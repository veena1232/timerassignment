import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import { FaClock } from "react-icons/fa";
import './App.css'
import cleanser from './cleanser.png'

const App = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(59);
  const [maxSec, setMaxSec] = useState(60);

  useEffect(() => {
    const timeTimeout = setTimeout(() => {
      if(remainingSeconds>=1)
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearTimeout(timeTimeout);
    };
  }, [remainingSeconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`
  };

  const handleButtonClick = () => {
    if(remainingSeconds>=0 && remainingSeconds<=49)
    setRemainingSeconds(remainingSeconds + 10);
  };

  const handleButtonClickS = () => {
    setRemainingSeconds(0);
  };

  return (
    <div className=''>
      <label className='routine'>Routine starting in ...</label>
      <label className='sub-head'>Subheading here</label>
      <div className='progress-bar circle'>
      
        <CircularProgressbar
        className='circle'
          value={remainingSeconds}
          text={formatTime(remainingSeconds)}
          styles={buildStyles({
            pathColor: '#701170', 
            textColor: '#f88',
            trailColor: '#d6d6d6',
            pathTransitionDuration: 0,
          })}
          maxValue={maxSec}
          counterClockwise={true}
        />
        
        </div>
        <div className='buttons'>
        <button className='sub-t1' onClick={handleButtonClick}>+ 10 sec</button>
        <button className='sub-t2' onClick={handleButtonClickS}>skip</button>
        </div>

        <div className='footer'>
  <div className="">
    <label className='step'><span className='span'>Step 2</span>/3</label>
    <div style={{marginTop:30}} className='d-flex'>
      <div><img src={cleanser} width={70}/></div>
      
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <label className='cleaning-text'>Cleansing</label>

        <div className='htd' style={{marginTop:20, display:'flex', justifyContent: 'space-between'}}>
          <FaClock/><label className='sec'>60 sec</label>
          <label className='htd-text'>How to do</label>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);
}

export default App