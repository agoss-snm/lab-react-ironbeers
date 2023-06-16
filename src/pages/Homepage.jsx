import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import BeersPhoto from '../img/beers.jpg';
import RandomPhoto from '../img/random-beer.jpg';
import NearBearPhoto from '../img/newbear.jpg'

function HomePage() {
    return (
        <div>
            <Header/>
            <Card className='card'>
                <Card.Img className='imgCard' variant="top" src={BeersPhoto}/>
                <Card.Body>
                    <Card.Text>
                    <Link to='/beers'>All Beers </Link>
                    <p className='textCard'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur a in!</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img className='imgCard' variant="top" src={NearBearPhoto} />
                <Card.Body>
                    <Card.Text>
                    <Link to='/new-beer'> New-Beer </Link>
                    <p className='textCard'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur a in!</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='card'>
            <Card.Img className='imgCard' variant="top" src={RandomPhoto}/>
                <Card.Body>
                    <Card.Text>
                    <Link to='/randomBeer'>   Random-Beer </Link>
                       <p className='textCard'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur a in!</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomePage;