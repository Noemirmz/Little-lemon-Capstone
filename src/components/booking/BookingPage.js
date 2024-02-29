import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import BookingForm from "./BookingForm";
import banner from '../../icons_assets/restaurant.jpg'

export default function BookingPage(){
    return(<>
    <section style={{ backgroundColor: "#FBDABB" }}>
        <Container >
            <h1 className="text-little-lemon pt-5">Reservation</h1>
            <div className="mt-4">
                <span style={{ color: '#333333', fontSize: 1 + 'rem' }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </span>
            </div>
            <Row className="d-flex mt mb pt-4 justify-content-md-center">
                <Col xs lg="8">
                    <BookingForm></BookingForm>
                </Col>
                <Col xs lg="4" className="d-flex justify-content-end">
                    <img alt="Reastaurant" src={banner} style={{ height: 90 + '%', width: 90 + '%', borderRadius: 1 + 'rem' }}></img>
                </Col>
            </Row>
        </Container>
    </section>
    </>);
}