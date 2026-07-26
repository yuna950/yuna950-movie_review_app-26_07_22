import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgBaseUrl";
import { Link } from "react-router-dom";

import "swiper/css";

export default function Section_2({ title, data }) {
  return (
    <div className=" px-[200px] py-[100px]">
      {/* title */}
      <h2 className="mb-12 text-4xl font-bold ">{title}</h2>

      {/* con_wrap */}
      <Swiper spaceBetween={10} slidesPerView={5}>
        {/* con */}
        {data.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <div className="h-[400px] rounded-lg overflow-hidden ">
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
