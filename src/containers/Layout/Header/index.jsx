import { useState } from "react";
import { Navigation } from "src/containers/Navigation";
import "./index.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import ModalForVideo from "src/components/Modal";

const Header = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Container className="header-container" fluid>
                <Row>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
                <Row className="header-content">
                    <Col lg="9">
                        <span>We are asioso</span>
                        <h1>
                            We make digital <br /> business simple
                        </h1>
                        <p>
                            In everything we do, we simply want to inspire
                            people.
                            <br /> Through our ideas we strengthen brands and
                            inspire their customers.
                            <br /> We create great digital experiences for your
                            visitors.
                        </p>
                        <div className="buttons-container">
                            {/* <button>Explore how</button> */}
                            <div className="explore-div">
                                Explore more &rarr;
                            </div>
                            <Button
                                variant="light"
                                size="lg"
                                className="watch-button"
                                onClick={() => setModalShow(true)}
                            >
                                &gt;
                            </Button>
                            <span>
                                <b>Watch video</b>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ModalForVideo
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Header;
