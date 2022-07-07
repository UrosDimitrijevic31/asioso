import classnames from "classnames";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./index.scss";

const Newsletter = () => {
    const className = classnames("newsletter align-middle");
    const [email, setEmail] = useState("");

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        const validEmail = new RegExp(
            "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
        );
        if (validEmail.test(email)) alert("successfully subscribed!");
        e.preventDefault();
    };

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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="email address"
                            onChange={handleOnChange}
                        />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </Col>
                c
            </Row>
        </Container>
    );
};

export default Newsletter;
