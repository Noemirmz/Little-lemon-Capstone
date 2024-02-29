import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { ReservationSchema } from "./Validaciones";

const AvailableTimes=[17,18,19,20,21,22]

export default function BookingForm(){

    const [times, setTimes] = useState(AvailableTimes);
    const onSubmit = async (values, actions) => {
        console.log(values);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    const initialValues = {
        Date: '',
        Time: '',
        Guest: 1,
        Occasion: ''
    }

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: ReservationSchema,
        onSubmit
    })
    return(
    <>
        
        <Form onSubmit={handleSubmit} style={{marginTop: 4 + 'rem', marginBottom: 4 + 'rem'}}>
        <h1>Booking form</h1>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="Date">Choose date</Form.Label>
                <Form.Control 
                    className={(errors.Date && touched.Date ? "border-danger" : "")}
                    name='Date'
                    type="date"
                    value={values.Date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                 />
                 {errors.Date && touched.Date && <p className="text-danger mt-2">{errors.Date}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Choose time</Form.Label>
                <Form.Select 
                    as='select'
                    name='Time'
                    className={(errors.Time && touched.Time ? "border-danger" : "")}
                    value={values.Time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    {
                        times && times.map((t) => <option key={t} value={t}>{t}:00</option>)
                    }
                </Form.Select>
                {errors.Time && touched.Time && <p className="text-danger mt-2">{errors.Time}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="Guest">Number of guests</Form.Label>
                <Form.Control  min="1" max="10"
                    className={(errors.Guest && touched.Guest ? "border-danger" : "")}
                    name='Guest'
                    type="number"
                    value={values.Guest}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.Guest && touched.Guest && <p className="text-danger mt-2">{errors.Guest}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Occasion</Form.Label>
                <Form.Select 
                    as='select'
                    name='Occasion'
                    className={(errors.Occasion && touched.Occasion ? "border-danger" : "")}
                    value={values.Occasion}
                    onChange={handleChange}
                    onBlur={handleBlur}>
                    <option value='birthday'>Birthday</option>
                    <option value='anniverdary'>Anniversary</option>
                </Form.Select>
                {errors.Occasion && touched.Occasion && <p className="text-danger mt-2">{errors.Occasion}</p>}
            </Form.Group>
            <Button variant="outline-dark" type="submit" disabled={isSubmitting}>Make Reservation 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check-fill ms-1" viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                </svg>
            </Button>
        </Form>
    </>);
}