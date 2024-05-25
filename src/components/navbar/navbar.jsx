import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../store/slice/language";

function MyNavbar() {


    const language = useSelector((state) => state.language.language);
    const dispatch = useDispatch();
    const toggleLang = () => {
      const newLang = language === "en" ? "ar" : "en";
      dispatch(changeLang(newLang));
      console.log(language);
    };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="text-dark">
          Cima
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/movies"
              className="nav-link text-dark"
              activeclassname="active"
            >
              Movies
            </NavLink>
            <NavLink
              to="/favourites"
              className="nav-link text-dark"
              activeclassname="active"
            >
              Favourite
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link text-dark"
              activeclassname="active"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link text-dark"
              activeclassname="active"
            >
              Contact
            </NavLink>

            <Nav.Link
              onClick={toggleLang}
              className="nav-link text-dark"
              activeclassname="active"
            >
              Language : {language}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
