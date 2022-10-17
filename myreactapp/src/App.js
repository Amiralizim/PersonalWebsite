import Navigation from './components/Navigation'
import './App.css';
import AboutMe from './components/AboutMe';
import Music from './components/Music';
import Projects from './components/Projects';
import Home from './components/Home';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/aboutMe' component={AboutMe}/>
        <Route path='/music' component={Music}/>
        <Route path='/projects' component={Projects}/>
        <Route exact path='/' component={Home}/>
      </Routes>
    </div>
  );
}

export default App;
