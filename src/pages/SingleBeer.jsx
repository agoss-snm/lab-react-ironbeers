import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

function SingleBeer({ beers }) {
  const { beerID } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const selectedBeer = beers.find((beer) => beer._id === beerID);
    setBeer(selectedBeer);
  }, [beerID, beers]);

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
            <Link to="/">Back Home</Link>
          </button>
          <button className='buttonHome'><Link to="/beers">Back List of Beers</Link></button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleBeer;
