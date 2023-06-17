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
                <Link to='/beers'> <h1 className='dark'>All Beers</h1> </Link>
                    <Card.Text>
                    
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur a in!
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img className='imgCard' variant="top" src={NearBearPhoto} />
                <Card.Body>
                <Link to='/new-beer'> <h1 className='dark'> New-Beer </h1></Link>
                    <Card.Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur a in!
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='card'>
            <Card.Img className='imgCard' variant="top" src={RandomPhoto}/>
                <Card.Body>
                <Link to='/randomBeer'> <h1 className='dark'> Random-Beer </h1></Link>
                    <Card.Text>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur a in!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomePage;