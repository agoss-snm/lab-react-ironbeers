import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import { useState } from 'react';

function NewBeer({ addBeer }) {
  const navigate = useNavigate();
  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBeerData({ ...beerData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        beerData
      );
      const newBeer = response.data;
      addBeer(newBeer); // Agregar la nueva cerveza al estado de las cervezas en el componente App
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div>
            <Header />
            <div className='Container-F'>
                
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name"><p>Name:</p></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={beerData.name}
                            onChange={handleChange}
                        />

                        <label htmlFor="tagline"> <p>Tagline:</p></label>
                        <input
                            type="text"
                            id="tagline"
                            name="tagline"
                            value={beerData.tagline}
                            onChange={handleChange}
                        />

                        <label htmlFor="description"> <p>Description:</p></label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={beerData.description}
                            onChange={handleChange}
                        />

                        <label htmlFor="first_brewed"><p>First Brewed:</p></label>
                        <input
                            type="text"
                            id="first_brewed"
                            name="first_brewed"
                            value={beerData.first_brewed}
                            onChange={handleChange}
                        />

                        <label htmlFor="brewers_tips"><p>Brewer's Tips:</p></label>
                        <input
                            type="text"
                            id="brewers_tips"
                            name="brewers_tips"
                            value={beerData.brewers_tips}
                            onChange={handleChange}
                        />

                        <label htmlFor="attenuation_level"><p>Attenuation Level:</p></label>
                        <input
                            type="number"
                            id="attenuation_level"
                            name="attenuation_level"
                            value={beerData.attenuation_level}
                            onChange={handleChange}
                        />

                        <label htmlFor="contributed_by"><p>Contributed By:</p></label>
                        <input
                            type="text"
                            id="contributed_by"
                            name="contributed_by"
                            value={beerData.contributed_by}
                            onChange={handleChange}
                        />

                        <button className='submit' type="submit"><p>Create Beer</p></button>
                    </form>
            </div>

        </div>
    );
}

export default NewBeer;
