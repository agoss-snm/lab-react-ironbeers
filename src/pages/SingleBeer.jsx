import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

function SingleBeer() {
  const { beerID } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const getBeer = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerID}`
        );
        setBeer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getBeer();
  }, [beerID]);

  return (
    <div>
      <Header />
      {beer ? (
        <div className='Container-R'>
          <div className='content'>
            <>
              <img src={beer.image_url} alt="beerRandom" height='300px' />
              <div className='align'>
                <div className='sectionName'>
                  <div className='alignLeft'>
                    <h3>{beer.name}</h3>
                    <p className='colorOpacity'>{beer.tagline}</p>
                  </div>
                  <div className='alignRight'>
                    <h3 className='colorOpacity'>{beer.attenuation_level}</h3>
                    <p className='brewed'>{beer.first_brewed}</p>
                  </div>
                </div>
                <p>Description: {beer.description}</p>
              </div>
              <p className='colorOpacity'>{beer.contributed_by}</p>
            </>
          </div>
          <button className='buttonHome'>
            <Link to="/"> <p className='white'>Home</p></Link>
          </button>
          <button className='buttonHome'>
            <Link to="/beers"><p className='white'>Back to List of Beers</p></Link>
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleBeer;
