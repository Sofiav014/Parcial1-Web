import { Card } from 'react-bootstrap';
import './styles/Cafe.css';
import { useEffect, useState } from 'react';
import { FormattedMessage, FormattedDate  } from "react-intl";

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
                <Card.Subtitle className='text'>
                    <FormattedDate
                        value={new Date(cafe.fecha_cultivo)}
                        year='numeric'
                        month='long'
                        day='numeric'
                        weekday='long'
                    />
                </Card.Subtitle>
                <Card.Img  src={cafe.imagen} style={{height: "30%", width: "30%"}} />
                <Card.Text className='notas'><FormattedMessage id="notes"/></Card.Text>
                <Card.Text className='notas'>{cafe.notas}</Card.Text>
                <Card.Title className='title'><FormattedMessage id="cultivated"/> {cafe.altura} <FormattedMessage id="msnm"/></Card.Title>
            </Card.Body>
            </Card>            
        </>
    );
}

export default CafeDetail;