import '../App.css';
import * as ReactStrap from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="App">
        <ReactStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">

          <ReactStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0"/>

          <ReactStrap.Navbar.Brand href="/" className="ml-auto">
            <Link to="/">
            <img
              src="../bw_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Hive"
            />
            </Link>
          </ReactStrap.Navbar.Brand>

          <ReactStrap.Navbar.Brand href="/login" className="ml-auto d-md-none">
            <img
              src="../user_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Login"
            />
          </ReactStrap.Navbar.Brand>

          <ReactStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactStrap.Nav className="mr-auto ">
              <Link to ='/tools' class="text-decoration-none pr-md-3">
              <ReactStrap.Nav.Link href="/tools">Tools</ReactStrap.Nav.Link>
              </Link>
              <Link to='/projects' class="text-decoration-none pr-md-3">
              <ReactStrap.Nav.Link href="/projects">Projects</ReactStrap.Nav.Link>
              </Link>
              <Link to='/events' class="text-decoration-none pr-md-3">
              <ReactStrap.Nav.Link href="/events">Events</ReactStrap.Nav.Link>
              </Link>
              <Link to='/rooms' class="text-decoration-none pr-md-3">
              <ReactStrap.Nav.Link href="/rooms">Rooms</ReactStrap.Nav.Link>
              </Link>
              <Link to='/groups' class="text-decoration-none">
              <ReactStrap.Nav.Link href="/groups">Groups</ReactStrap.Nav.Link>
              </Link>
            </ReactStrap.Nav>
          </ReactStrap.Navbar.Collapse>

          <ReactStrap.Navbar.Brand href="/login" className="ml-auto d-none d-md-block">
            <img
              src="../user_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Login"
            />
          </ReactStrap.Navbar.Brand>

          </ReactStrap.Navbar>
    </div>
  );
}

export default Navbar;
