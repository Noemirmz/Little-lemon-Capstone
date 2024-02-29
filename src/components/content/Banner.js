import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import restaurant from '../../icons_assets/restauranfood.jpg'
export default function Banner() {
    return (
        <section className="bg-primary2" style={{ height: 300 + 'px' }}>
            <Container >
                <Row className="d-flex mt mb justify-content-md-center pt-4">
                    <Col xs lg="8">
                        <h1 className='text-little-lemon'>Little Lemon</h1>
                        <span style={{ color: '#ffffff', fontSize: 1.5 + 'rem' }}>Chicago</span><br></br>
                        <div className='mt-3'>
                            <span  style={{ color: '#ffffff'}}>
                                We are a family owned Mediterranean restauramt, <br></br>
                                focused o traditional recipes served with a mmodern twist.
                            </span>
                        </div>
                        <div className='mt-4'>
                            <Link to={'/booking-page'} className='bg-yellow mt-3 p-2 border-0 border-round ' style={{color: '#000000', textDecoration: 'none' }}>Reserve a Table</Link>
                        </div>
                    </Col>
                    <Col xs lg="4" className='d-flex justify-content-end'>
                        <img alt="Reastaurant" src={restaurant} style={{ height: 75 + '%', width: 75 + '%', borderRadius: 1 + 'rem', }}></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}