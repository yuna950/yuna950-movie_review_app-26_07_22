import ReactPlayer from "react-player";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Section_5({ data }) {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl mb-5 ">비디오</h2>

      <Swiper
        slidesPerView={"2"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.results.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="w-full aspect-video">
              <ReactPlayer
                src={`https://www.youtube.com/watch?v=${video.key}`}
                width="100%"
                height="100%"
                light={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
              />
            </div>

            <h3 className="text-center font-bold ">{video.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
