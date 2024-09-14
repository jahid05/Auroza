import image1 from "../assets/hero/heroImg-1.png";
import image2 from "../assets/hero/heroImg-2.png";
import image3 from "../assets/hero/heroImg-3.png";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";
const Hero = () => {
  const swiper = useSwiper();
  return (
    <div className="bg-slate-100 rounded-3xl">
      <Swiper
        className="mySwiper md:px-12 px-6 md:py-16 py-6"
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".button_next",
          prevEl: ".button_prev",
        }}
        modules={[Navigation, Autoplay, Pagination]}
      >
        <SwiperSlide className="md:grid md:grid-cols-2 flex flex-col-reverse">
          <div className="flex flex-col justify-center">
            <p className="md:text-lg">
              Welcome to <span className="text-theme-1 font-bold">Auroza</span>
            </p>
            <h1 className="md:text-5xl  text-3xl text-gray-600 md:py-5 py-2 font-bold">
              Enjoy 10% off your <br /> First purchase.
              <br /> Use code <span className="text-theme-1">WELCOME10</span>.
              🎁
            </h1>
            <Link className="py-4" to="/collection">
              <Button content="Shop Now" />
            </Link>
          </div>
          <div className="flex justify-center">
            <img className="lg:w-[500px] md:w-96" src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="md:grid md:grid-cols-2 flex flex-col-reverse">
          <div className="flex flex-col justify-center">
            <p className="md:text-lg">
              Welcome to <span className="text-theme-1 font-bold">Auroza</span>
            </p>
            <h1 className="md:text-5xl text-3xl text-gray-600 md:py-5 py-2 font-bold">
              Enjoy 10% off your <br /> First purchase.
              <br /> Use code <span className="text-theme-1">WELCOME10</span>.
              🎁
            </h1>
            <Link className="py-4" to="/collection">
              <Button content="Shop Now" />
            </Link>
          </div>
          <div className="flex justify-center">
            <img className="lg:w-[500px] md:w-96" src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="md:grid md:grid-cols-2 flex flex-col-reverse">
          <div className="flex flex-col justify-center">
            <p className="md:text-lg">
              Welcome to <span className="text-theme-1 font-bold">Auroza</span>
            </p>
            <h1 className="md:text-5xl text-3xl text-gray-600 md:py-5 py-2 font-bold">
              Enjoy 10% off your <br /> First purchase.
              <br /> Use code <span className="text-theme-1">WELCOME10</span>.
              🎁
            </h1>
            <Link className="py-4" to="/collection">
              <Button content="Shop Now" />
            </Link>
          </div>
          <div className="flex justify-center">
            <img className="lg:w-[500px] md:w-96" src={image3} alt="" />
          </div>
        </SwiperSlide>

        {/* <div className="absolute bottom-12 swiper_btn z-10 flex justify-between px-12 py-6">
        <button
          onClick={() => swiper.slidePrev()}
          className="button_prev p-2 rounded-full top-0 bg-white text-theme-1 text-xl md:text-3xl text-center"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="button_next p-2 rounded-full bg-white text-theme-1 text-xl md:text-3xl text-center"
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div> */}
      </Swiper>
    </div>
  );
};

export default Hero;
