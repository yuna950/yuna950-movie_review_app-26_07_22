import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgBaseUrl";
import { Link } from "react-router-dom";

import "swiper/css";

export default function Section_2({ title, data }) {
  return (
    <div>
      {/* title */}
      <h2 className="mb-8 xl:mb-12 text-3xl xl:text-4xl font-bold ">{title}</h2>

      {/* con_wrap */}
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 4,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 5,
          },
        }}
      >
        {/* con */}
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <div className="h-[280px] md:h-[300px] xl:h-[400px] rounded-lg overflow-hidden ">
                <img
                  className="h-[100%] object-cover hover:scale-105 transition"
                  src={W500_URL + movie.poster_path}
                  alt={movie.title}
                />
              </div>
              <p className="font-bold text-[20px] mt-2">{movie.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
