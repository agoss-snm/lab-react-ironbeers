import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

function Beers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredBeer, setFilteredBeer] = useState([]);

  useEffect(() => {
    const getBeersApi = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setBeers(response.data);
        setFilteredBeer(response.data);
      } catch (error) {
        setBeers([]);
        setFilteredBeer([]);
      }
    };
    getBeersApi();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    const filtered = beers.filter((beerItem) =>
      beerItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeer(filtered);
  };

  const addBeer = async (newBeer) => {
    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        newBeer
      );
      const addedBeer = response.data;
      setBeers([...beers, addedBeer]);
      setFilteredBeer([...beers, addedBeer]);
    } catch (error) {
      console.error(error);
    }
  };


    return (
        <div>
            <Header />
            <SearchBar handleSearch={handleSearch} search={search} />
            <div className='cardsContainer'>
                {filteredBeer.map((item) => (  
                    <div className='cardBeer' key={item._id}>
                        <img src={item.image_url} alt="" height='300px' />
                        <h4>
                            <Link to={`/beers/${item._id}`}> <p className='dark'>{item.name}</p></Link>
                        </h4>
                    </div>
                ))}
            </div>
            <div className='fixed'>
                <button className='buttonHome'>
                    <Link to="/"> <p className='white'>Home</p></Link>
                </button>
            </div>
        </div>
    );
}

export default Beers; 