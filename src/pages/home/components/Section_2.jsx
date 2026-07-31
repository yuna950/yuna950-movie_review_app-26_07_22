import { W500_URL } from "../../../constant/imgBaseUrl";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Section_2({ title, data }) {
  //   console.log(data?.results.index);
  const swiperRef = useRef(null);
  return (
    <div className="">
      {/* title */}
      <h2 className="mb-8 xl:mb-12 text-3xl xl:text-4xl font-bold ">{title}</h2>

      <div className="relative">
        {/* con_wrap */}
        <Swiper
          className="w-[100%]"
          centeredSlides={false}
          spaceBetween={10}
          slidesPerView={5}
          slidesPerGroup={5}
          loop={true}
          breakpoints={{
            320: {
              spaceBetween: 10,
              slidesPerGroup: 2,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {/* con */}
          {data?.results?.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <div className="h-[280px] md:h-[300px] xl:h-[400px] rounded-lg overflow-hidden relative ">
                  <img
                    className="h-[100%] object-cover hover:scale-105 transition"
                    src={W500_URL + movie.poster_path}
                    alt={movie.title}
                  />
                  <p className="absolute top-2 left-2 w-[40px] h-[40px] flex justify-center items-center text-lg text-white font-bold  bg-black/70 rounded-lg ">
                    {index + 1}
                  </p>
                </div>
                <p className="font-bold text-[20px] mt-2">{movie.title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="px-1 py-1 rounded-full bg-white/80 absolute top-[50%] left-0 transform translate-x-[-50%] translate-y-[-50%] z-2 shadow-md shadow-black/20"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ChevronLeft size={30} />
        </button>
        <button
          className="px-1 py-1 rounded-full bg-white/80 absolute top-[50%] right-0 transform translate-x-[50%] translate-y-[-50%]  z-2 shadow-md shadow-black/20"
          onClick={() => swiperRef.current.slideNext()}
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}
