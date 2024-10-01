
import { Swiper, SwiperSlide } from 'swiper/react';
import CardList from './Layout/Component/LayoutComponent/CardList';
import 'swiper/css';
const MySwiper= () =>{
    return(
        <>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-lg-3 px-5">
                    <div className="upcoming">
                        <p className="ps-5">News</p>
                        <h3 className="Blog ps-5">Latest Blog</h3>
                    </div>
                </div>
                <div className="col-lg-9">
                <Swiper
                     pagination={{ clickable: true }}
                   spaceBetween={60}
                       slidesPerView={2}
                       autoplay={true}
                      onSlideChange={() => console.log('slide change')
                    
                    }
                      onSwiper={(swiper) => console.log(swiper)}
                                >
      <SwiperSlide>
        <CardList imgPath="blog2.jpg" cardTitle="Help the ecosystems"  cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn."></CardList>

      </SwiperSlide>
      <SwiperSlide>
      <CardList imgPath="blog1.jpg" cardTitle="Help the ecosystems" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn."></CardList>
       
      </SwiperSlide>
      <SwiperSlide>
      <CardList imgPath="blog2.jpg" cardTitle="Help the ecosystems" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn."></CardList>
      </SwiperSlide>
      <SwiperSlide>
      <CardList imgPath="blog1.jpg" cardTitle="Help the ecosystems" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn."></CardList>
      </SwiperSlide>
      
    </Swiper>
                </div>
            </div>
        </div>
        </>
    )
}

export default MySwiper