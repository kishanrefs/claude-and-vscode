import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { carouselSlides } from '../data/carouselSlides.js'

export default function Carousel() {
  return (
    <div className="carousel-wrap">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 140,
          modifier: 1.6,
          slideShadows: false,
        }}
        autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, el: '.carousel-pagination' }}
        navigation={{ prevEl: '.carousel-prev', nextEl: '.carousel-next' }}
        className="feature-swiper"
      >
        {carouselSlides.map((slide) => (
          <SwiperSlide key={slide.title} className="feature-slide">
            <div className={`feature-slide-card accent-${slide.accent}`}>
              <span className="eyebrow">{slide.tag}</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="carousel-controls">
        <button className="carousel-arrow carousel-prev" aria-label="Previous slide">
          <HiArrowLeft size={18} />
        </button>
        <div className="carousel-pagination" />
        <button className="carousel-arrow carousel-next" aria-label="Next slide">
          <HiArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
