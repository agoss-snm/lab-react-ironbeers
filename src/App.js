import './App.css';
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router-dom";
import Beers from './pages/Beers';
import NewBeer from './pages/New-Beer';
import RandomBeer from './pages/Random-Beer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleBeer from './pages/SingleBeer';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeersApi = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setBeers(response.data);
      } catch (error) {
        setBeers([]);
      }
    };
    getBeersApi();
  }, []);

  const addBeer = async (newBeer) => {
    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        newBeer
      );
      const addBeer = response.data;
      setBeers([...beers, addBeer]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers beers={beers} />} />
        <Route path='/new-beer' element={<NewBeer addBeer={setBeers} />} />
        <Route path="/randomBeer" element={<RandomBeer />} />
        <Route path='/beers/:beerID' element={<SingleBeer beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
