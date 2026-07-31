import { Pagination } from "swiper/modules";
import { ORIGINAL_URL } from "../../../constant/imgBaseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Section_4({ data }) {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl mb-5 ">갤러리</h2>

      <Swiper
        slidesPerView={"2"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {data.backdrops.slice(0, 10).map((backdrop) => (
          <SwiperSlide key={backdrop.file_path}>
            <div>
              <img
                src={ORIGINAL_URL + backdrop.file_path}
                alt={backdrop.file_path}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
