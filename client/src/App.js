import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Banking from './pages/banking';
import WeatherForecast from './pages/weather forecast';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Community from './pages/community';
import Market from './pages/market';
import farmer from './farmer.jpg';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setListOfUsers(response.data)
    });
  }, []);
    //   {id: 1, name: "chakri", age: 20, username: "chakri1905"}
  //
  const styles = {
    backgroundImage: `url(${farmer})`,
    backgroundSize: 'cover',
    height: '30vh',
    
  };
  const createUser = ()=>{
    Axios.post("http://localhost:3001/createUsers", {
      name: name,
      age: age,
      username: username,
  }).then((response)=>{
      setListOfUsers([...listOfUsers, {name: name,
        age: age,
        username: username}])
    })
  }
  return (  
    
    <div className="App">
      
      <div className='Nav-bar'>
      <Router>
        <div style={styles}>
        </div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about'  element={<About />} />
        <Route path='/banking' element={<Banking />} />
        <Route path='/market' element={<Market />} />
        <Route path='/weather forecast'  element={<WeatherForecast />}/>
        <Route path='/community'  element={<Community />}/>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up'  element={<SignUp />} />
      </Routes>
    </Router>
      </div>
      <div className="userDisplay">
        {listOfUsers.map((user)=>{
          return(
            <div>
              <h1>Name: {user.name}</h1>
          <h1>age {user.age}</h1>
          <h1>Username: {user.username}</h1>
          </div>
          )
        }
        )}
        </div>
        <div>
          <input type="text" placeholder='name...' onChange={(event)=> {setName(event.target.value)}}/>
          <input type="number" placeholder='age...' onChange={(event)=> {setAge(event.target.value)}}/>
          <input type="text" placeholder='username...' onChange={(event)=> {setUsername(event.target.value)}}/>
          <button onClick={createUser}>createUser</button>
        </div>
    </div>
    
  );
}

export default App;
