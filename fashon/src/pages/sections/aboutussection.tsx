import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import fcorasolimgphoto from"../../assets/Homepagephotos/corasoul img.jpg"
import secondcorasolimgphoto from"../../assets/Homepagephotos/corasol img2.jpg"
import thirdcorasolimgphoto from"../../assets/Homepagephotos/corasol img3.jpg"
const Aboutussection = () => {
  return (
    <div>

      <div className="aboutus-text" style={{ marginBottom:"1.5rem"}}>

      <h1 style={{ alignSelf:"center"}}>About us</h1>
      </div>
    <Container fluid>
      <Row>
        <Col md={{span:5,offset:1}}>

        <div style={{ width:"100%",height:"100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut officia ducimus iure iusto perferendis dolore voluptatum dolor, incidunt suscipit necessitatibus ipsa, voluptas maiores voluptatibus cumque. Aliquam incidunt aliquid iure optio nulla similique, quam et eligendi molestias fugiat nisi natus sint quasi consequuntur aut perspiciatis quae, necessitatibus voluptatum adipisci quo laborum? Suscipit odio quaerat officiis fuga corporis aut, vero sunt.</p>

        </div>

        
        </Col>
        
        <Col md={{ span: 2, offset: 0 }}>  <Carousel fade style={{width:"400px" ,height:"350px"}}>
      <Carousel.Item>
        <img style={{ width:"400px" ,height:"350px",borderRadius:"20px"}} src={fcorasolimgphoto}></img>
        <Carousel.Caption>
          <h3>Best price </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ width:"400px" ,height:"350px",borderRadius:"20px"}} src={secondcorasolimgphoto}></img>
        <Carousel.Caption>
          <h3>jut for you</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ width:"400px" ,height:"350px",borderRadius:"20px"}} src={thirdcorasolimgphoto}></img>
        <Carousel.Caption>
          <h3>
            Your fashon
          </h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
      </Row>
    </Container>

    </div>
  )
}

export default Aboutussection

