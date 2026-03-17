import { useEffect, useState } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    var intervalId;

    if(status) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }


    return () => clearInterval(intervalId);

  }, [status]);

  return (
    <>
      <h1>Timer</h1>
      <h3>The below is the timer</h3>
      <h1>{String(Math.floor(seconds / 60)).padStart(2, '0')} : {String(seconds % 60).padStart(2, '0')}</h1>
      <div>
        <button onClick={() => {
          setStatus(status ^ true);
        }}>{status ? 'Pause' : 'Start'}</button>
        <button onClick={() => {
          setSeconds(0);
          setStatus(false);
        }}>Reset</button>
      </div>
    </>
  )
}

export default App
