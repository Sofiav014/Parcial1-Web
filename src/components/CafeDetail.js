import { Card } from 'react-bootstrap';
import './styles/Cafe.css';
import { useEffect, useState } from 'react';

function CafeDetail(props) {
    const id = props.cafe;
    const [cafe, setCafe] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/cafes/${id}`)
            .then(response => response.json())
            .then(data => {
                setCafe(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);
    

    return (
        <>
            <Card border="dark" style={{ backgroundColor:"rgba(224, 187, 187, 0.2)" }} className='cards'>
            <Card.Body>
                <Card.Title className='title'>{cafe.nombre}</Card.Title>
                <Card.Subtitle className='text'>{cafe.fecha_cultivo}</Card.Subtitle>
                <Card.Img  src={cafe.imagen} style={{height: "30%", width: "30%"}} />
                <Card.Text className='notas'>Notas</Card.Text>
                <Card.Text className='notas'>{cafe.notas}</Card.Text>
                <Card.Title className='title'>Cultivado a una altura de {cafe.altura} msnm</Card.Title>
                
            </Card.Body>
            </Card>            
        </>
    );
}

export default CafeDetail;