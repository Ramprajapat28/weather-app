
import './App.css';
import React , {useState} from "react";

const api ={
  key: "8f2766829f2c13649a626a01dd1ec385",
  base: 'https://api.openweathermap.org/data/2.5/weather?'
}
function App() {
  const [search, setSearch]=useState("")
  const [weather, setWeather]=useState({})
  const searchPressed = () => {
    fetch(`${api.base}q=${search}&units=metric&appid=${api.key}`)
  .then(res => res.json())
  .then(result =>{
    setWeather(result)
  })
  };
  
  return (
    <div className="App">
      <header className="App-header">
        {/*heather */}
        <h1>weather app</h1>
        <input class="input" type="text" placeholder="enter city name"
        onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed} class='btn'>SEARCH</button>
         {/*Search box */}
         {typeof weather.main != "undefined"? 
         
        
         <div>
         {/*Location*/}

         <p>{weather.name}</p>
          {/*Temperature */}
          <p>{weather.main.temp}*F</p> 
           {/*Condition (sunny) */}
          
          <p> {weather.weather[0].main}</p>
          <p> {weather.weather[0].descritions}</p>
          </div>
        
       :''
       }
      </header> 
    </div>
  );
}

export default App;
