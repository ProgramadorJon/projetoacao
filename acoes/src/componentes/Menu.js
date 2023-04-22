import { Button, Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap"
import { FaSearch } from 'react-icons/fa'
import { useState } from "react"
import Informacoes from "./Informacoes.js"



export default function Menu(){

    const [input, setInput] = useState('')


    function busca(){

        if(input === ''){
            alert('Campo de busca vazio')
        }

        try {
            <Informacoes  ticker={input}/>            
        } catch (error) {
            return error
        }

    }

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
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
               <Button variant="outline-success"onClick={busca}>
                <FaSearch /></Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}