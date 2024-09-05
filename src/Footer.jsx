import React from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component{

    render() {

        return (
            <footer>
                <Row xs={1} md={1} lg={1}>
                    <Col>Copi angel paz</Col>
                    <Col>2024</Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;