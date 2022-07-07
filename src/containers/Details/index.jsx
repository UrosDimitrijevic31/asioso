import { Image, Container, Row, Col } from "react-bootstrap";
import Card from "src/components/Cards/TextCard";
import "./index.scss";
import experienceImage from "src/assets/experience.jpg";

const Details = () => {
    return (
        <Container className="details">
            <Row>
                <Col sm="7" className="image-container-details">
                    <Image
                        fluid="true"
                        rounded="true"
                        src={experienceImage}
                        alt="experience-image"
                        className="logo"
                    />
                </Col>
                <Col sm="5" className="right">
                    <span>Lorem ipsum</span>
                    <h2>
                        <small>Impresing our</small> <br />
                        customers
                    </h2>
                    <p>
                        Our efforts to establish long-term and sustainable
                        customer relationships are highly valued by our
                        customers.
                    </p>
                    <Card
                        title="Customer oriented"
                        text="We are not industry oriented, we are customer oriented."
                    />
                    <Card
                        title="Experience"
                        text="Our decades of experience with Content and customer experiences help us to do this"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Details;
