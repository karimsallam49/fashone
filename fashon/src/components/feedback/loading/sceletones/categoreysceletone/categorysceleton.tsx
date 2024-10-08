
import { Col, Row } from "react-bootstrap"
import ContentLoader from "react-content-loader"

const Categorysceleton = () => {
  const rendercategoryselecton=Array(4).fill(0).map((_,idx)=>(

  <Col key={idx}>
  
    <ContentLoader 
    speed={2}
    width={140}
    height={180}
    viewBox="0 0 140 180"
    backgroundColor="#aa9d9d"
    foregroundColor="#ecebeb"
    
  >
    <rect x="26" y="121" rx="3" ry="3" width="88" height="6" /> 
    <rect x="1" y="132" rx="3" ry="3" width="410" height="6" /> 
    <circle cx="67" cy="65" r="45" />
  </ContentLoader>
  </Col>




  ))
  return <Row>{rendercategoryselecton}</Row>

 
  
}

export default Categorysceleton
