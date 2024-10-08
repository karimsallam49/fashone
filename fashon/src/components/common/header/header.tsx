import { useAppDispatch,useAppSelector } from "../../../store/hooks";
import { logout } from "../../../store/auth/authslice";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Headercart from "../../ecommerce/cart/headercart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { clrearitems } from "../../../store/cart/cartSlices";
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useAppDispatch();
  const{users,accsessToken}=useAppSelector((state)=>state.Authslice)
  return (
    <header>
        

        
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <div style={{marginRight:"20px"}}>

        <Navbar.Brand href="/" >Fashone</Navbar.Brand>
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
          
          </Nav>
          <Nav>
            {accsessToken? (<>
            
              <div className="icones" onClick={()=>navigate("/cart")}>
        <Headercart/>
    </div>
          <NavDropdown title={users?.firstname} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile" >profile</NavDropdown.Item>
              <NavDropdown.Item >
                orders
              </NavDropdown.Item>
              <NavDropdown.Item onClick={ ()=>{
                dispatch(clrearitems())
                dispatch(logout())} 
              } 
                as={Link} to="/"
                >Logout</NavDropdown.Item>
             </NavDropdown>
            </>
            )


            :(<>
            
            <Nav.Link as={Link} to="/login">Log-in</Nav.Link>
            <Nav.Link as={Link} to="/regusiter">sign-in</Nav.Link>
            
            
            </>
            )}
            

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </header>
  )
}

export default Header;
