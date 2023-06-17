import './App.css';
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import Beers from './pages/Beers';
import NewBeer from './pages/New-Beer';
import RandomBeer from './pages/Random-Beer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path="/randomBeer" element={<RandomBeer />} />
        <Route path='/beers/:beerID' element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
