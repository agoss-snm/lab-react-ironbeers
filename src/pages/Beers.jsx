import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';


function Beers({ beers }) {

    const [search, setSearch] = useState('');
    const [filteredBeer, setFilteredBeer] = useState(beers);

    const handleSearch = (searchTerm) => {
        setSearch(searchTerm);
        const filtered = beers.filter((beerItem) =>
            beerItem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBeer(filtered);
    };



    return (
        <div>
            <Header />
            <SearchBar handleSearch={handleSearch} search={search} />
            <div className='cardsContainer'>
                {filteredBeer.map((item) => (   // <-- Utiliza filteredBeer en lugar de beers
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