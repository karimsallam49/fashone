import { Container } from "react-bootstrap";
import styles from'./mainlayoutstyle.module.css'
import {Header,Footer} from "../../common/header/index";
import { Outlet } from "react-router-dom";

const {container , wrapper} = styles;
function Mainlayout() {
  return (
  <Container className={container}>

<Header/>
    

    <div className={wrapper}>
      <Outlet/>
    </div>


    <Footer/>
  </Container>
  )
}

export default Mainlayout
