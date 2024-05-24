import './App.css'
import React, { useState } from 'react';
import axios from "axios";


function App() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");


  const register = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/signup", {
      email: email,
      name: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("Account Created");
      }
    });
  };



  return (
    <div>
      <form>
        <h4>Register</h4>
        <label htmlFor='name'>User Name:</label>
        <input required type="text" id="username" name="username"
          onChange={(e) => { setUsername(e.target.value) }}></input>
        <label htmlFor='email'>Email:</label>
        <input required type="text" id="email" name="email"
          onChange={(e) => { setEmail(e.target.value) }}></input>
        <label htmlFor='password'>password:</label>
        <input required type="text" id="password" name="password"
          onChange={(e) => { setPassword(e.target.value) }}></input>
        <input type="submit" value="submit"
          onClick={register}></input>
        <h5 style={{"color":"red"}}>{registerStatus}</h5>

      </form>


    </div>
  );
}

export default App;
