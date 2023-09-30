import { Container, Row } from 'react-bootstrap';
import './styles/Header.css';
import hero from '../hero.png';
import { FormattedMessage } from "react-intl";

function Header() {
    return (
        <Container fluid className="container-reset">
          <h1 className='brand'><FormattedMessage id="brand"/></h1>
          <hr></hr>
            <Row >
                  <img src={hero} alt="hro" style={{height:"338px", width:"100%"}}/>
            </Row>
            <hr></hr>
          </Container>
    );
}

export default Header;