import{ Swiper,SwiperSlide } from "swiper/react"
import { Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = () => {
  return(
    <Swiper
      modules={[Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        <SwiperSlide><img src='https://via.placeholder.com/300' alt='300'/></SwiperSlide>
        <SwiperSlide><img src='https://via.placeholder.com/300' alt='300'/></SwiperSlide>
         
    </Swiper>
  )
}