import { Scrollbar } from "swiper/modules";
import { NO_IMG, PROFILE_URL } from "../../../constant/imgBaseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

export default function Section_3({ crewData, castData }) {
  return (
    <div>
      <div className="space-x-5">
        <h2 className="font-bold text-2xl mb-5">감독 / 출연진</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={10}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar]}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 5.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="mb-5">
            <div className="w-[120px] h-[150px] rounded-2xl overflow-hidden">
              {crewData?.profile_path !== null ? (
                <img
                  className="object-cover"
                  src={PROFILE_URL + crewData.profile_path}
                  alt={crewData.name}
                />
              ) : (
                <img className="h-full " src={NO_IMG} alt={crewData.name} />
              )}
            </div>
            {/* img_wrap */}

            <div className="w-[120px] text-center">
              <p className="">{crewData.name}</p>
              <p className="text-sm text-black/50">{crewData.job}</p>
            </div>
            {/* text_wrap */}

            {/* director */}
          </SwiperSlide>

          {castData.slice(0, 15).map((cast) => (
            <SwiperSlide key={cast.id}>
              <div className="w-[120px] h-[150px] rounded-2xl overflow-hidden">
                {cast?.profile_path !== null ? (
                  <img
                    className="object-cover"
                    src={PROFILE_URL + cast?.profile_path}
                    alt={cast.name}
                  />
                ) : (
                  <img className="h-full" src={NO_IMG} alt={cast.name} />
                )}
              </div>

              <div className="w-[120px] text-center">
                <p className="">{cast.name}</p>
                <p className="text-sm text-black/50">{cast.character}</p>
              </div>
            </SwiperSlide>
          ))}
          {/* cast */}
        </Swiper>
      </div>
    </div>
  );
}
