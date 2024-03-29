import React from 'react';
import './styles/App.scss';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Article from './components/Article';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Article/>
      <Contact/>
    </div>
  );
}

export default App;
