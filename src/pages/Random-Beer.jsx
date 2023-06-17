import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    const getRandomBeer = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers/random'
        );
        setRandomBeer(response.data);
      } catch (error) {
        setRandomBeer([]);
      }
    };

    getRandomBeer();
  }, []);

  return (
    <div className='Container-R'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='content'>
        <h1>Random Beer</h1>
        <>
          <img src={randomBeer.image_url} alt="beerRandom" height='300px' />
          <div className='align'>
            <div className='sectionName'>
              <div className='alignLeft'>
                <h3><Link to={`/beers/${randomBeer._id}`}>{randomBeer.name}</Link></h3>
                <p className='colorOpacity'>{randomBeer.tagline}</p>
              </div>
              <div className='alignRight'>
                <h3 className='colorOpacity'>{randomBeer.attenuation_level}</h3>
                <p className='brewed'>{randomBeer.first_brewed}</p>
              </div>
            </div>
            <p>Description: {randomBeer.description}</p>
          </div>
          <p className='colorOpacity'>{randomBeer.contributed_by}</p>
        </>
      </div>
      <div className='fixed'>
                <button className='buttonHome'>
                    <Link to="/"> <p className='white'>Home</p></Link>
                </button>
            </div>
    </div>
  );
}

export default RandomBeer;
