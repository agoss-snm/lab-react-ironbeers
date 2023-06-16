import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='header'>
           <p className='icon'><Link to='/'>&#127969;</Link> </p>
        </div>
    )
}

export default Header;