import React from "react";

import { Carousel } from "react-bootstrap";
import GameCard from "../Components/GameCard";

function HomePaje() {
    let base = "/assets/images/";
    let img = base + "logo1.jpg";
    const Games = [
        { id: 0, image: img, gameName: "game1 ", description: "0 " },
        { id: 1, image: img, gameName: "game2 ", description: "1 " },
        { id: 2, image: img, gameName: "game2 ", description: "2 " },
        { id: 3, image: img, gameName: "game4 ", description: "3 " },
        { id: 4, image: img, gameName: "game5 ", description: "4 " },
        { id: 5, image: img, gameName: "game6 ", description: "5 " },
        { id: 6, image: img, gameName: "game7 ", description: "6 " },
        { id: 7, image: img, gameName: "game8 ", description: "7 " },
        { id: 8, image: img, gameName: "game9 ", description: "8 " },
        { id: 9, image: img, gameName: "game10 ", description: "9 " },
    ];

    return (
        <div className="HomePage">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CRImage"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CRImage"
                        src={img}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CRImage"
                        src={img}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h2 className="PopularGames my-5 mx-5">بازی های محبوب</h2>
            <div className="gamePopularList d-flex flex-wrap border border-primary mx-5 mb-5 p-4">
                {Games.map((item) => (
                    <GameCard
                        image={item.image}
                        gameName={item.gameName}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePaje;
