import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./index.scss";

const CardContainer = (props) => {
    return (
        <div className="image-card-wrapper">
            <Card
                style={{
                    backgroundImage: "url(" + props.backgroundImage + ")",
                }}
            >
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2">
                        {props.subtitle}
                    </Card.Subtitle>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardContainer;
