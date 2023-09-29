import {Navbar } from 'react-bootstrap';
import './styles/Header.css';

function Header() {
    return (
        <>
          <Navbar className="bg-body-tertiary">
              <Navbar.Brand className='brand' >El aroma magico</Navbar.Brand>
          </Navbar>
        </>
    );
}

export default Header;