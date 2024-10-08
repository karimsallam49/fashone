import { Swiper,SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';
import { useAppSelector } from '../../store/hooks';


const Menproducts = () => {
    
    const {record}=useAppSelector((state)=>state.productslice)
    const getproduct=record.filter((el)=>{

      return el.home_render=="men"
    })
    const rendermenproduct=



    <Swiper
    freeMode={true}
    grabCursor={true}
    modules={[FreeMode]}
    className='myswiper'
    slidesPerView={5}
    spaceBetween={50}>


        

        {getproduct.length > 0  ?getproduct.map((el)=> (
    

    <SwiperSlide>

      

       <Card style={{ width: '10rem' }} >
        <Card.Img variant="top" src={el.img} style={{height:"170px"}} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {el.price}
          </Card.Text>
        </Card.Body>
      </Card>

    </SwiperSlide>
       
    
    
    
  )):"error"}

    </Swiper>
    

    
  return (
    <div>
        

       {rendermenproduct}

    </div>
  );
}

export default Menproducts
