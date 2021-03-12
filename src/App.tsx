import React from 'react';
import './App.css';
import Remakes from './components/Remakes';
import movies from './movies.json';

function App() {
  return (
    <div className="App">
      <br />
    {movies.map(movie => 
    <Remakes
    data={movie}/>)}
    </div>
  );
}

export default App;
