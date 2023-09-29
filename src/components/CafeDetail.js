import { Card } from 'react-bootstrap';
import './styles/Cafe.css';

function CafeDetail(props) {
    const { cafe } = props;

    if (!cafe) {
        // Handle the case when no cafe is selected (optional)
        return <div className="cafe-detail">Select a cafe to see details.</div>;
    }

    return (
        <>

            <Card border="dark" style={{ width: '95%', backgroundColor:"rgba(224, 187, 187, 0.2)" }}>
            <Card.Body>
                <Card.Title className='title'>{cafe.nombre}</Card.Title>
                <Card.Text>{cafe.fecha_cultivo}</Card.Text>
                <Card.Img  src={cafe.imagen} />
                <Card.Text>Notas</Card.Text>
                <Card.Text>{cafe.notas}</Card.Text>
                <Card.Title>Cultivado a una altura de {cafe.altura} msnm</Card.Title>
                
            </Card.Body>
            </Card>


            
        </>
    );
}

export default CafeDetail;