    import React, { useState } from 'react'
    import { Button, Col, Form, Row } from 'react-bootstrap'

    const Contact = () => {
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);
        };

        return (
            <>
                <Form style={{marginLeft: '10%', width: '80%'}} noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                            <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="1234 Main St" />
                        <Form.Control.Feedback type="invalid">Please provide an address.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control required />
                            <Form.Control.Feedback type="invalid">Please provide a city.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select required defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select a state.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control required />
                            <Form.Control.Feedback type="invalid">Please provide a zip code.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }

    export default Contact
