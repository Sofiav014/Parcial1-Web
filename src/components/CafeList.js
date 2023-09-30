import { useState, useEffect } from "react";
import "./styles/CafeList.css";
import { Col, Row } from 'react-bootstrap';
import CafeDetail from "./CafeDetail";
import { FormattedMessage } from "react-intl";


function CafeList() {
    const [cafes, setCafes] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3001/cafes")
          .then(response => response.json())
          .then(data => {
            setCafes(data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);



    const [selectedCafe, setSelectedCafe] = useState(null);

    const handleCardClick = (cafe) => {
        console.log(cafe.id);
        setSelectedCafe(cafe.id);
    };


    return (
        <>
        <br />
        <Row>
        <Col> 
            <table className="table table-hover">
            <thead className='table-dark' >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"><FormattedMessage id="name"/></th>
                    <th scope="col"><FormattedMessage id="type"/></th>
                    <th scope="col"><FormattedMessage id="region"/></th>
                </tr>
            </thead>
            <tbody>
            {cafes.map((cafe) => (
                <tr key={cafe.id} onClick={() => handleCardClick(cafe)}>
                <th scope="row">{cafe.id}</th>
                <td>{cafe.nombre}</td>
                <td>{cafe.tipo}</td>
                <td>{cafe.region}</td>
                </tr>
            ))}
            </tbody>
      </table>
        </Col> 
        <Col> 
            {selectedCafe && (
                    <CafeDetail cafe={selectedCafe} />
            )}   
        </Col> 
        </Row>
        </> 
    );
    
}

export default CafeList;
