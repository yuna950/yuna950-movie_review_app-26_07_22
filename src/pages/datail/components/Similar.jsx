import { Link } from "react-router-dom";
import { W500_URL } from "../../../constant/imgBaseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Similar({ similarData }) {
  return (
    <div>
      <div className="">
        <h2 className="font-bold text-2xl mb-5">유사한 영화🎞</h2>

        <div className="flex">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            className="w-[100%]"
            navigation={true}
            modules={[Navigation]}
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
        </div>
      </div>
    </div>
  );
}
