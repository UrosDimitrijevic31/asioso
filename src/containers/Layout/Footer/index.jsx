import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

const Footer = () => {
    return (
        <Container className="footer">
            <Row>
                <Col>
                    <span>lorem ipsum</span>
                    <h2>
                        <small>Contat us.</small> <br /> Let's Talk.
                    </h2>
                </Col>
                <Col>
                    <p>Resource</p>
                    <ul>
                        <li>About us</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </Col>
                <Col>
                    <p>Where we are</p>
                    <ul>
                        <li>
                            Veljka Dugoševića 54 <br /> 11050 Beograd Serbia
                        </li>
                    </ul>
                </Col>
                <Col>
                    <p>Our contact info</p>
                    <ul>
                        <li>info@asioso.com</li>
                        <li>+381 63 166 40 71</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
