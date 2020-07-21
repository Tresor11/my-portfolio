import React from 'react';
import './styles/App.scss';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Project/>
      <Article/>
    </div>
  );
}

export default App;
