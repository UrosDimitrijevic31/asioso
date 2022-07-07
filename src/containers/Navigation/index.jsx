import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "src/components/Logo";

export const Navigation = () => {
    return (
        <Navbar
            className="color-nav"
            collapseOnSelect
            expand="lg"
            bg={"dark"}
            variant="dark"
            fixed="top"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavDropdown
                            title="Dropdown"    
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link
                            className="link"
                            style={{ color: "white", fontWeight: "bold" }}
                            href="#deets"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            style={{ color: "white", fontWeight: "bold" }}
                            href="#deets"
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            style={{ color: "white", fontWeight: "bold" }}
                            href="#deets"
                        >
                            Blog
                        </Nav.Link>
                        <Nav.Link
                            style={{ color: "white", fontWeight: "bold" }}
                            href="#deets"
                        >
                            Contact
                        </Nav.Link>
                        <Nav.Link
                            style={{ color: "white", fontWeight: "bold" }}
                            href="#deets"
                        >
                            +381 63 166 40 71
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
