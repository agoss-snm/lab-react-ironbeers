import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Beers({ beers }) {
  return (
    <div>
      <Header />
      <div className='cardsContainer'>
        {beers.map((item) => (
          <div className='cardBeer' key={item._id}>
            <img src={item.image_url} alt="" height='300px' />
            <h4>
              <Link to={`/beers/${item._id}`}>{item.name}</Link>
            </h4>
          </div>
        ))}
      </div>
      <button className='buttonHome'>
        <Link to='/'>Back Home</Link>
      </button>
    </div>
  );
}

export default Beers; 