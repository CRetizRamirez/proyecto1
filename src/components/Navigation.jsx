import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
			<Container>
				<Navbar.Brand as={NavLink} to="/">desoRet</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/projects">Proyectos
						</Nav.Link>
						<NavDropdown title="Admin">
							<NavDropdown.Item as={NavLink} to="/admin/users">Usuarios</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#home">
								Link Separado
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link as={NavLink} to="/login">Iniciar Secion</Nav.Link>
						<Nav.Link as={NavLink} to="/register">Registrarse</Nav.Link>
						<Nav.Link as={NavLink} to="/account">Mi Cuenta</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
