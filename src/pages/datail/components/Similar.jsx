import { Link } from "react-router-dom";
import { W500_URL } from "../../../constant/imgBaseUrl";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Similar({ similarData }) {
  const swiperRef = useRef(null);
  return (
    <div>
      <div className="">
        <h2 className="font-bold text-2xl mb-5">유사한 영화🎞</h2>

        <div className="relative">
          <Swiper
            className="w-[100%]"
            centeredSlides={false}
            spaceBetween={10}
            slidesPerView={6}
            slidesPerGroup={6}
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
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {similarData?.results.map((similar) => (
              <SwiperSlide key={similar.id}>
                <Link to={`/detail/${similar.id}`}>
                  <div className=" h-[330px] rounded-lg overflow-hidden">
                    <img
                      className="h-full object-cover hover:scale-105 transition"
                      src={W500_URL + similar.poster_path}
                      alt={similar.title}
                    />
                  </div>

                  <p>{similar.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="px-1 py-1 rounded-full bg-white/80 absolute top-[50%] left-0 transform translate-x-[-50%] translate-y-[-50%] z-2 shadow-md
            shadow-black/20"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ChevronLeft size={30} />
          </button>
          <button
            className="px-1 py-1 rounded-full bg-white/80 absolute top-[50%] right-0 transform translate-x-[50%] translate-y-[-50%] z-2 shadow-md
            shadow-black/20"
            onClick={() => swiperRef.current.slideNext()}
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
