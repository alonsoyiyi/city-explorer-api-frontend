import React from "react";
import { Button, Form,Alert } from "react-bootstrap";

class CitySearch extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.displayLatLon();

    };

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="cityName" >
                    <Form.Label>Ingresa la direccion a Explorar: </Form.Label>
                    <Form.Control onChange={this.props.updateCity} type="text" placeholder="Ingresa Direccion" />
                </Form.Group>
                { this.props.hasError &&
                    <>
                        <Alert  variant="danger">
                            <strong>Error {' '}</strong>
                            {this.props.errorMessage}, porfavor intenta nuevamente.
                        </Alert>
                    </>
                }
                <Button variant="primary" type="submit">
                    Explorar
                </Button>
            </Form>
        );
    }
}
export default CitySearch;