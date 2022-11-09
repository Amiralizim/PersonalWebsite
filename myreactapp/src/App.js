import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import AboutMe from './components/AboutMe';
import Music from './components/Music';
import Projects from './components/Projects';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/aboutMe' element={<AboutMe/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
