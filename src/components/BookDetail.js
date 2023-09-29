import "./styles/BookDetail.css";
import { Card } from 'react-bootstrap';

function BookDetail(props) {
    const { book } = props;

    if (!book) {
        // Handle the case when no book is selected (optional)
        return <div className="book-detail">Select a book to see details.</div>;
    }

    return (
        <>

            <Card border="dark" style={{ width: '95%' }}>
            <Card.Header>Detalle del libro</Card.Header>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>ISBN: {book.isbn}</Card.Text>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Publisher: {book.publisher}</Card.Text>
                <Card.Text>Year: {book.year}</Card.Text>
                <Card.Text>Available Online: {book.availableOnline ? "Yes" : "No"}</Card.Text>
                <Card.Text>Price: {book.price}</Card.Text>
                <Card.Text>Summary: </Card.Text>
                <Card.Text>{book.summary}</Card.Text>
            </Card.Body>
            </Card>
        </>
    );
}

export default BookDetail;