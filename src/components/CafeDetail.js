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

            <Card border="dark" style={{ width: '95%', backgroundColor:"rgba(224, 187, 187, 0.2)" }} className='cards'>
            <Card.Body>
                <Card.Title className='title'>{cafe.nombre}</Card.Title>
                <Card.Text className='text'>{cafe.fecha_cultivo}</Card.Text>
                <Card.Img  src={cafe.imagen} />
                <Card.Text className='notas'>Notas</Card.Text>
                <Card.Text className='notas'>{cafe.notas}</Card.Text>
                <Card.Title className='title'>Cultivado a una altura de {cafe.altura} msnm</Card.Title>
                
            </Card.Body>
            </Card>


            
        </>
    );
}

export default CafeDetail;