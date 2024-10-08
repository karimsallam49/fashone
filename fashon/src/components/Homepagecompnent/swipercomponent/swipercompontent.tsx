import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import firstphoto from"../../../assets/Homepagephotos/thirdphoto.avif"
import secondphoto from"../../../assets/Homepagephotos/secondphoto.jpg"
import fsiwperphoto from"../../../assets/Homepagephotos/swiperphotp1.jpg"
import secondsiwperphoto from"../../../assets/Homepagephotos/swiperphoto2.jpg"
import thirdsiwperphoto from"../../../assets/Homepagephotos/swiperphoto3.jpg"
import forthsiwperphoto from"../../../assets/Homepagephotos/swiperphoto4.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./swiperstyle.css"
const Swipercompontent = () => {
  return (
    <Swiper
      spaceBetween={100}
      autoplay={true}
      slidesPerView={4}
      effect={"coverflow"}
      loop={true}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate :0,
        stretch:0,
        depth:100,
        modifier:2.5,
      }
      }
      
      pagination={{el:".swiper-pagination",clickable:true}}
      modules={[EffectCoverflow,Pagination,Navigation]}
      className='swiper_container w-100'
    >
      <SwiperSlide><img className ="swiperimg"src={firstphoto} alt="" /></SwiperSlide>
      <SwiperSlide><img className ="swiperimg"src={secondphoto} alt="" /></SwiperSlide>
      <SwiperSlide><img className ="swiperimg"src={fsiwperphoto} alt="" /></SwiperSlide>
      <SwiperSlide><img className ="swiperimg"src={secondsiwperphoto} alt="" /></SwiperSlide>
      <SwiperSlide><img className ="swiperimg"src={forthsiwperphoto} alt="" /></SwiperSlide>
      <SwiperSlide><img className ="swiperimg"src={thirdsiwperphoto} alt="" /></SwiperSlide>
      
      <div className="swiper-controler">
        <div className="swiper-botton-prev slider-arrow">
        </div>
      </div>
    </Swiper>
  )
}

export default Swipercompontent
