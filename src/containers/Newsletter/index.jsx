import classnames from "classnames";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.scss";

const Newsletter = () => {
    const className = classnames("newsletter align-middle");

    return (
        <Container className={className} fluid>
            <Row>
                <Col className="left-div">
                    <h2>
                        <small>Subscribe to our</small> <br />
                        newsletter!
                    </h2>
                    <p>Subscribe to our newsletter and stay updated</p>
                </Col>
                <Col className="right-div">
                    <input type="text" />
                    <Button type="submit">Subscribe</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Newsletter;
