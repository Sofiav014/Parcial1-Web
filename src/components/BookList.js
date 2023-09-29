import { useState } from "react";
import BookDetail from "./BookDetail";
import "./styles/Book.css";
import { Card, Col, Row } from 'react-bootstrap';

function BookList({ books }) {
    // const [books, setBooks] = useState([]);
    // useEffect(()=>{
    //     //const URL = "https://my.api.mockaroo.com/Books.json?key=4e0fca60";
    //     fetch(URL).then(data => data.json()).then(data => {
    //             setBooks(data);
    //     })
    // }, []);

    const [books_list] = useState([
        {
            "isbn": "216662373-5",
            "title": "Sun Wind (Aurinkotuuli)",
            "summary": "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
            "author": "Julian Bew",
            "year": 2000,
            "availableOnline": true,
            "publisher": "Babbleblab",
            "price": "$63.26",
            "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
            "isbn": "326569448-8",
            "title": "The Ghosts in Our Machine",
            "summary": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
            "author": "Jud Wrought",
            "year": 2005,
            "availableOnline": true,
            "publisher": "Minyx",
            "price": "$97.07",
            "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
            },
            {
            "isbn": "642152694-2",
            "title": "Rabbit Hole",
            "summary": "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
            "author": "Cecilius Sorey",
            "year": 1994,
            "availableOnline": false,
            "publisher": "Jaxspan",
            "price": "$81.41",
            "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
            },
            {
            "isbn": "800075770-2",
            "title": "In Cold Blood",
            "summary": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec",
            "author": "Farrand Glanders",
            "year": 1997,
            "availableOnline": false,
            "publisher": "Jaloo",
            "price": "$53.49",
            "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
            }
    ]);


    const [selectedBook, setSelectedBook] = useState(null);
    const handleCardClick = (book) => {
        setSelectedBook(book);
    };


    return (
        <>
        <Row>
        <Col md={6}> 
            <Row className="book-row">
                    {books_list.map((book) => (
                        <Col md={4} key={book.isbn} className="book-col mb-3 mt-5 px-5">
                            <Card onClick={() => handleCardClick(book)} className={selectedBook === book ? 'selected' : ''}>
                                <Card.Img variant="top" src={book.image} className="cardImg" />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        IDBN: {book.isbn}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Col> 
        <Col md={6}> 
            {selectedBook && (
                    <BookDetail book={selectedBook} />
            )}   
        </Col> 
        </Row>
        </> 
    );
    
}

export default BookList;
