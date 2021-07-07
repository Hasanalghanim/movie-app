import React from "react";
import axios from 'axios';







const fetchData = () => { 
   axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ba5e7823bbf4d4c2d17adf631af2bffa')
   .then(res => {return res.data})}

console.log(fetchData)

    
function App() {
  return (
  <div className="App">
      <header className="App-header">
      
      <h1> hello</h1>
      
      </header>
    </div>
  );
}

export default App;