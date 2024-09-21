import React from "react";
import { Button, Form, Alert } from "react-bootstrap";

function CitySearch(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.displayLocation();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="cityName" >
                <Form.Label>Ingresa la direccion a Explorar: </Form.Label>
                <Form.Control onChange={props.updateCity} type="text" placeholder="Ingresa Direccion" />
            </Form.Group>
            {props.hasError &&
                <>
                    <Alert variant="danger">
                        <strong>Error {' '}</strong>
                        {props.errorMessage}, porfavor intenta nuevamente.
                    </Alert>
                </>
            }
            <Button variant="primary" type="submit">
                Explorar
            </Button>
        </Form>
    );
}
export default CitySearch;