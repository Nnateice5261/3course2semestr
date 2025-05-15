import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Navbar variant="light" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">BookLibrary</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#Header">Навигационная панель</Nav.Link>
                        <Nav.Link href="#Carousel">Книга дня</Nav.Link>
                        <NavDropdown title="List" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#Grid">Актуальные книги</NavDropdown.Item>
                            <NavDropdown.Item href="#Footer">Подвал</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;