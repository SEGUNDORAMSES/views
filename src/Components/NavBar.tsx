import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import JuegosView from '../Views/Testimonios';


function NavBar() {
    return (
        <div className="container">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'home'}>Home</Nav.Link>
                            <Nav.Link as={Link} to={'testimonios'}>TESTIMONIOS</Nav.Link>
                            <Nav.Link as={Link} to={'beneficios'}>BENEFICIOS</Nav.Link>
                            <Nav.Link as={Link} to={'tecnologias'}>TECNOLOGÍAS</Nav.Link>
                            <Nav.Link as={Link} to={'formulario'}>FORMULARIO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    )
}




export default NavBar

