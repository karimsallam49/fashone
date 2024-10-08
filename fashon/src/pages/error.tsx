import { Container } from "react-bootstrap";
import Loattehandler from "../components/feedback/lottiehandler/loattehandler";
import { Link } from "react-router-dom";
// import styles from'.././style/globalstyle.module.css';




const Error = () => {
 
  return (
    <Container className="d-flex flex-column align-items-center" style={{marginTop:"10%"}}>

        <Loattehandler types="notfound"/>
        <Link to='/' replace={true}>The page you want to reach not found back to home</Link>

    </Container>
    
  )
}

export default Error;
