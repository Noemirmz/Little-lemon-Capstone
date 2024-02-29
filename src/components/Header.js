
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../icons_assets/Logo.svg'
export default function Header() {
    return (
        <>
            <header>
                <Container className="d-flex justify-content-between mt mb">
                    <img alt="Logo" src={logo}></img>
                    <nav>
                        <ul className='list-inline mt-0 mb-0 pt-1'>
                            <li className='me list-inline-item'>
                                <Link to={'/'} style={{color: '#000000', textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li className='me list-inline-item'>About us</li>
                            <li className='me list-inline-item'>Menu</li>
                            <li className='me list-inline-item'>
                                <Link to={'/booking-page'} style={{color: '#000000', textDecoration: 'none' }}>Reserve a Table</Link>
                            </li>
                            <li className='me list-inline-item'>Order online</li>
                            <li className='me list-inline-item'>Login</li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}