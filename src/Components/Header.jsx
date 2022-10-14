import React , { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Header() {

    const [showLogin, setShowLogin] = useState(false);

    const loginHandleClose = () => setShowLogin(false);
    const loginHandleShow = () => setShowLogin(true);

    const [showSignin, setShowSignin] = useState(false);

    const singinHandleClose = () => setShowSignin(false);
    const signinHandleShow = () => setShowSignin(true);

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
                            <input
                                className="border rounded-pill"
                                type="submit"
                                value=" search "
                            />
                            <input
                                className="fs-6 fw-6 px-2"
                                id="search-text"
                                type="search"
                                placeholder=" اسم بازی مورد نظرت رو بنویس "
                                required
                            />
                        </div>
                        <Nav className="justify-content-end  ms-auto ps-4 dir-rtl">
                            <Nav.Link href="#about-us" className="pt-3 px-2"> درباره ما </Nav.Link>
                            <Nav.Link href="#game-list" className="pt-3 px-2"> لیست بازی ها </Nav.Link>
                            <Nav.Link href="#log-in">
                                <Button variant="primary" onClick={loginHandleShow}>
                                    ورود
                                </Button>

                                <Modal show={showLogin} onHide={loginHandleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title> وارد حساب شوید </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form action="#" className="login_form d-flex flex-column">
                                            <input type="email" value="" placeholder=" ایمیل خود را وارد کنید " required/>
                                            <input type="password" name="" id="" placeholder=" پسورد خود راوارد کنید " required />
                                            <input type="button" value=" وارد شوید " />
                                        </form>
                                    </Modal.Body>
                                </Modal>
                            </Nav.Link>
                            <Nav.Link href="#sign-up">
                                <Button variant="primary" onClick={signinHandleShow}>
                                    ثبت نام
                                </Button>

                                <Modal show={showSignin} onHide={singinHandleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title> ثبت نام کنید </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form action="#" className="login_form d-flex flex-column">
                                            <input type="text" name="signinUserName" placeholder=" نام کاربری خود را وارد کنید " required />
                                            <input type="email" name="signinEmail" placeholder=" ایمیل خود را وارد کنید " required/>
                                            <input type="password" name="signinPassword" id="sp" placeholder=" پسورد خود راوارد کنید " required />
                                            <input type="button" value=" ثبت نام کنید " />
                                        </form>
                                    </Modal.Body>
                                </Modal>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
