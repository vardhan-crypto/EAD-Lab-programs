import { useState } from 'react';

const GetData = () => {
  const [password, setPassword] = useState("");

  const getStrength = (pw) => {
    if(!pw) return "";
    if(pw.length < 6) return "Weak";
    if(/(?=.*[a-z])(?=.*[A-Z])(?=.*d).(8,)/.test(pw)) return "Strong";
    return "Moderate";
  }

  const handleChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
      <div>
        <center>
          <h1>Passwerd Strength Checker</h1>
          <input type="password" placeholder='Enter' onChange={handleChange}/>
          <h3>{getStrength(password)}</h3>
        </center>
      </div>
    </>
  )
}

export default GetData;