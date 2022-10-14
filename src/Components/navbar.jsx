import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function navbar() {
    return (
        <div className="navbar">
            <Navbar className="col-12" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="ms-4 col-1 d-flex">
                        Game_Senter
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav d-flex">
                        <div className="search col-8 col-lg-5 d-flex ms-xl-3 ms-lg-5 me-auto">
                            <input className="border rounded-pill" type="submit" value=" search " />
                            <input className="fs-6 fw-6 px-2" id="search-text" type="search" placeholder=" اسم بازی مورد نظرت رو بنویس " required/>
                        </div>
                        <Nav className="justify-content-end  ms-auto ps-4 dir-rtl">
                            <Nav.Link href="#about-us"> درباره ما </Nav.Link>
                            <Nav.Link href="#game-list"> لیست بازی ها </Nav.Link>
                            <Nav.Link href="#log-in"> ورود </Nav.Link>
                            <Nav.Link href="#sign-up"> ثبت نام </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default navbar;
