import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import MnA from '../../icons_assets/Mario and Adrian A.jpg'
import LL from '../../icons_assets/Mario and Adrian b.jpg'
export default function About() {
    return (
        <Container className='mt-5'>
            <Row className="d-flex mt mb justify-content-md-center pt-4">
                <Col xs lg="4">
                    <h1 className='text-little-lemon'>Little Lemon</h1>
                    <span style={{ color: '#333333', fontSize: 1.5 + 'rem' }}>Chicago</span>
                    <article className='mt-2' style={{ color: '#333333'}}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </article>
                </Col>
                <Col xs lg="8" className='d-flex justify-content-end'>
                    <img alt="Reastaurant" src={MnA} style={{ height: 60 + '%', width: 60 + '%', borderRadius: 1 + 'rem', marginRight: -14 + 'rem', marginTop: 6 + 'rem', zIndex: 1 }}></img>
                    <img alt="Reastaurant" src={LL} style={{ height: 60 + '%', width: 60 + '%', borderRadius: 1 + 'rem', }}></img>
                </Col>
            </Row>
        </Container>
    );
}