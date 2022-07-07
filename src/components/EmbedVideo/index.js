import { Container, Row, Col } from "react-bootstrap";

const YoutubeEmbed = ({ embedId }) => (
    // <div className="video-responsive">
    <Container>
        <Row>
            <Col style={{ padding: "0" }}>
                <iframe
                    width="100%"
                    height="300px"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </Col>
        </Row>
    </Container>

    // </div>
);

export default YoutubeEmbed;
