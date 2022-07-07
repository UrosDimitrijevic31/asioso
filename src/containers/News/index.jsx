import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getNews } from "src/api/api";
import NewsCard from "src/components/Cards/NewsCard";
import "./index.scss";

const News = () => {
    const [fetchedData, setFetchedData] = useState([]);

    const getData = async () => {
        return await getNews();
    };

    useEffect(() => {
        getData()
            .then((res) => {
                console.log(res);
                setFetchedData(res.articles);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const newsCards = fetchedData.slice(0, 3).map((card) => (
        <Col key={card.content}>
            <NewsCard
                date={card.publishedAt}
                title={card.title}
                url={card.urlToImage}
            />
        </Col>
    ));

    return (
        <Container className="news">
            <Row className="text-wrapper">
                <Col>
                    <p>lorem ipsum</p>
                    <h2>
                        <small>News and</small> trends
                    </h2>
                </Col>
            </Row>
            <Row className="card-wrapper">{newsCards}</Row>
        </Container>
    );
};

export default News;
