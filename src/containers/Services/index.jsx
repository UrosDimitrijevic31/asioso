import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import CardContainer from "src/components/Cards/ImageCard";
import customer from "src/assets/customer.jpg";
import content from "src/assets/content.jpg";
import touchpoints from "src/assets/touchpoints.jpg";

const Services = () => {
    return (
        <Container className="services-wrapper">
            <Row className="text-container">
                <Col>
                    <span>ovo su tri reci? </span>
                    <h2>
                        <small>Our</small> focus
                    </h2>
                </Col>
            </Row>
            <Row className="card-container">
                <Col>
                    <CardContainer
                        title="Customer"
                        subtitle="Customer experience"
                        backgroundImage={customer}
                    />
                </Col>
                <Col>
                    <CardContainer
                        title="Content"
                        subtitle="Web content management"
                        backgroundImage={content}
                    />
                </Col>
                <Col>
                    <CardContainer
                        title="Touchpoints"
                        subtitle="Content as a service"
                        backgroundImage={touchpoints}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Services;
