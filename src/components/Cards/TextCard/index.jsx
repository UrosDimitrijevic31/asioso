import Card from "react-bootstrap/Card";
import "./index.scss";

const CardContainer = (props) => {
    return (
        <div className="text-card-wrapper">
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardContainer;
