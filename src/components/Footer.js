import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import logo from '../icons_assets/Logo.svg'
export default function Footer() {
    return (
        <>
            <footer style={{background: '#333333', color: '#EDEFEE'}}>
                <Container>
                    <Row >
                        <Col sm={3}>
                            <img alt="Logo" src={logo} className='w-100 pFooterLogo'></img>
                        </Col>
                        <Col sm={3} className='d-grid justify-content-end mt-4'>
                            <h3 className='ps-4'>Doormat Navigation</h3>
                            <ul style={{listStyle: 'none'}}>
                                <li>Home</li>
                                <li>About</li>
                                <li>menu</li>
                                <li>Reservations</li>
                                <li>Order Online</li>
                                <li>Login</li>
                            </ul>
                        </Col>
                        <Col sm={3} className='d-grid justify-content-end mt-4'>
                            <h3 className='ps-4'>Contact</h3>
                            <ul style={{listStyle: 'none'}}>
                                <li>adress</li>
                                <li>phone number</li>
                                <li>email</li>
                            </ul>
                        </Col>
                        <Col sm={3} className='d-grid justify-content-end mt-4'>
                            <h3 className='ps-4'>Social Media</h3>
                            <ul style={{listStyle: 'none'}}>
                                <li>adress</li>
                                <li>phone number</li>
                                <li>email</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}