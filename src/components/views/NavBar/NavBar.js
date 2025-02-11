import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <Navbar data-testid="navbar-section" bg="primary" variant="dark" className="mt-4 mb-4 rounded justify-content-between">  
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Blog.app</Navbar.Brand>      
                    <Nav>
                        <Nav.Link data-testid="home-link"  as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link data-testid="categories-link" as={NavLink} to="/categories">Categories</Nav.Link>
                        <Nav.Link data-testid="about-link" as={NavLink} to="/about">About</Nav.Link>
                    </Nav>  
                </Container>   
        </Navbar>
    );
}

export default NavBar;