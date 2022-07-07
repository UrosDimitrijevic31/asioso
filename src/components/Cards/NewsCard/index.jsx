import Card from "react-bootstrap/Card";
import "./index.scss";

const NewsCard = (props) => {
    return (
        <div className="news-card-wrapper">
            <Card style={{ height: "38rem" }}>
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Text>{props.date}</Card.Text>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Read more</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsCard;
