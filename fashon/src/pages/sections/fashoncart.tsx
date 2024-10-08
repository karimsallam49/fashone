import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nikelogo from "../../assets/Homepagephotos/nike.jpg"
import adidas from "../../assets/Homepagephotos/addidas.webp"
import zara from "../../assets/Homepagephotos/zara.jpg"
const Fashoncart = () => {
  return (

    <Container fluid="md">
    <Row>
      <Col> 
       <Card style={{ width: '18rem' }} className='barnd-carts'>
    <Card.Img variant="top" style={{height:"200px"}} src={adidas} />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Col>
      <Col> 
       <Card style={{ width: '18rem' }} className='barnd-carts'>
    <Card.Img variant="top" style={{height:"200px"}} src={nikelogo} />
    <Card.Body>
    
    </Card.Body>
  </Card>
  </Col>
      <Col> 
       <Card style={{ width: '18rem' }}className='barnd-carts'>
    <Card.Img variant="top" style={{height:"200px"}} src={zara} />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Col>
    </Row>
  </Container>
   
  )
}

export default Fashoncart
