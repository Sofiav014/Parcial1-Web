import { useState, useEffect } from "react";
// import CafeDetail from "./CafeDetail";
import "./styles/CafeList.css";
import { Col, Row } from 'react-bootstrap';
import CafeDetail from "./CafeDetail";


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
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Región</th>
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
