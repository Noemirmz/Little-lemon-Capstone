import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import card1 from '../../icons_assets/greeksalad.jpg'
import card2 from '../../icons_assets/bruchetta.svg'
import card3 from '../../icons_assets/lemondessert.jpg'

export default function Specials() {
    return (
        <Container className='mt-8r'>
            <Row className="d-flex mt mb justify-content-md-center">
                <Col sm={8}>
                    <h1>This weeks specials!</h1>
                </Col>
                <Col sm={4} className='d-flex justify-content-md-end'>
                    <button className='bg-yellow mt-3 p-2 border-0 border-round'>Online Menu</button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <Card className='card-specials' >
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title>Greek Salad <span className='price-text'>$12.99</span></Card.Title>
                            <Card.Text>
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </Card.Text>
                            <Button variant="outline-warning">Order a delivery 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bicycle ms-2" viewBox="0 0 16 16">
                                    <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
                                </svg>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="4">
                    <Card className='card-specials'>
                        <Card.Img variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title>Bruchetta <span className='price-text'>$5.99</span></Card.Title>
                            <Card.Text>
                                Our Bruchetta is made from grilled bread that has been smared with garlic and seasoned with salt and olive oil.
                            </Card.Text>
                            <Button variant="outline-warning">Order a delivery 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bicycle ms-2" viewBox="0 0 16 16">
                                    <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
                                </svg>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs lg="4">
                    <Card className='card-specials'>
                        <Card.Img variant="top" src={card3} />
                        <Card.Body>
                            <Card.Title>Lemon Dessert <span className='price-text'>$5.00</span></Card.Title>
                            <Card.Text>
                                This comes staright from grandma`s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </Card.Text>
                            <Button variant="outline-warning">Order a delivery 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bicycle ms-2" viewBox="0 0 16 16">
                                    <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
                                </svg>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}