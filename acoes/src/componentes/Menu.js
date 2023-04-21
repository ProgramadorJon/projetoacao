import { Button, Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap"
import { FaSearch } from 'react-icons/fa';

export default function Menu(){
    return (
        <>
        <Navbar expand="lg" bg="black" variant="dark">
            <Container fluid>
            <Navbar.Brand href="#">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px'}}
                navbarScroll
                >
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Pesquisar Ação"
                    className="me-2"
                    aria-label="Search"
                />
               <Button variant="outline-success"><FaSearch /></Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}