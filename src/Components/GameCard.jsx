import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function GameCard({image, gameName, description}) {
    return (
        <div className="GameCard">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> { gameName } </Card.Title>
                    <Card.Text>
                        { description }
                    </Card.Text>
                    <Button variant="primary"> بازی کن </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GameCard