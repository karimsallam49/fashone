import { useAppDispatch } from '../store/hooks';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import actGetproduct from '../store/product/actproduct';
import Swipercompontent from '../components/Homepagecompnent/swipercomponent/swipercompontent';
import { Button, Container, Row } from 'react-bootstrap';
import Menproducts from '../components/Homepagecompnent/menproducts';
import "./pagesstyle.css"
import Aboutussection from './sections/aboutussection';
import Fashoncart from './sections/fashoncart';
import Womenproduct from '../components/Homepagecompnent/swipercomponent/womenproduct';

const Home = () => {
  
  const dispacth=useAppDispatch()
  useEffect(()=>{

    dispacth(actGetproduct("men&&cat_prefix=women"))
  },[dispacth])

  const menproduct=

  

    <Menproducts />




  return (


    <div className="homepage">


     <div className="header">

  <div className="header-text">
    <h1>We Have the best collection</h1>
  </div>
  <div className="swiper-heading" style={{marginTop:"50px"}}>

  <Swipercompontent/>
  </div>

  </div>



<div id="about-us" style={{textAlign:"center", color:"white"}}>

<Aboutussection/>
</div>

<div id="men-section">

  <Container>
<Row>

    <div className="header-text">
      <h1>
        Men's Products
      </h1>
    </div>

</Row>

<Row>

    <div className="swiper-area">

  {menproduct}
  <Button variant='info' style={{color:"white",marginTop:"10px"}}> <Link style={{textDecoration:"none", color:"white"}} to="categories/products/men">Show more</Link></Button>



    </div>

</Row>


  </Container>



  </div>
<div id="womens-section">

  <Container>
<Row>

    <div className="header-text">
      <h1>
        women's Products
      </h1>
    </div>

</Row>

<Row>

    <div className="swiper-area">

  <Womenproduct/>
  <Button variant='info' style={{color:"white",marginTop:"10px"}}> <Link style={{textDecoration:"none", color:"white"}} to="categories/products/men">Show more</Link></Button>



    </div>

</Row>


  </Container>



  </div>

  

  




<div id="fashon-carts">
  <Container>

    <Row>
<div className="brand-text">
      <h1>
        Our brands
      </h1>
    </div>

    </Row>
    <Row>
  <Fashoncart/>

    </Row>
  </Container>

</div>
      </div>



  );


}
export default Home
