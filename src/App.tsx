import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts,setPosts]=useState()
useEffect(()=>{
  const url='https://swapi.dev/api/people'
  fetch(url).then(resp=>resp.json())
  .then(resp=>console.log(resp))
},[])
  return (
    <div className="App">
      <h1 className="center">React App</h1>

    </div>
  );
}

export default App;

