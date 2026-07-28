import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCredit,
  getDetail,
  getImage,
  getProvider,
  getSimilar,
  getVideo,
} from "../api/MovieApi";
import Loading from "../../components/Loading";
import { ORIGINAL_URL, PROFILE_URL, W500_URL } from "../../constant/imgBaseUrl";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

export default function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [creditData, setCreditData] = useState();
  const [providerData, setProviderData] = useState();
  const [similarData, setSimilarData] = useState();
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const videoData = await getVideo(id);
        setVideoData(videoData);
        // 예고편

        const movieData = await getDetail(id);
        setMovieData(movieData);
        // 상세정보

        const creditData = await getCredit(id);
        setCreditData(creditData);
        // 감독, 배우

        const providerData = await getProvider(id);
        setProviderData(providerData);
        // OTT

        const similarData = await getSimilar(id);
        setSimilarData(similarData);
        // 유사 영화

        const imageData = await getImage(id);
        setImageData(imageData);
        // 스틸컷
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  // const trailer = videoData?.results.find((video) => video.type === "Trailer");
  const castData = creditData?.cast;
  const crewData = creditData?.crew.find((crew) => crew.job === "Director");
  const providerKr = providerData?.results.KR;

  console.log(providerKr);

  return (
    <div>
      <div
        className="w-full h-[60vh] overflow-hidden relative"
        style={{
          background: `linear-gradient(
              to top,
              rgba(0,0,0,0.6),
              rgba(0,0,0,0.2)
            ), url(${ORIGINAL_URL}${movieData.backdrop_path}) no-repeat center / cover`,
        }}
      >
        <div className="absolute left-[200px] bottom-[100px]">
          <p className="text-white font-bold text-5xl mb-3">
            {movieData.title}
          </p>
          <div className="text-white/90 space-y-3">
            <p>{movieData.original_title}</p>

            <ul className="flex space-x-3">
              {movieData?.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            <div className="flex space-x-3">
              <p>{movieData.release_date}</p>
              <p>{movieData.runtime} 분</p>
            </div>

            <p>⭐{movieData.vote_average}</p>
          </div>
        </div>
      </div>
      {/* hero_section */}

      <div className="px-[200px] py-[50px] flex space-x-5">
        <div className="h-[400px] w-[250px] rounded-lg overflow-hidden  ">
          <img
            className="h-[100%] object-cover"
            src={W500_URL + movieData.poster_path}
            alt={movieData.title}
          />
        </div>
        {/* img_wrap */}

        <div className="w-[1000px]">
          <div className="w-full flex justify-between px-13 py-4 border rounded-2xl border-gray-200 mb-10">
            <div className="flex">
              <FaStar
                size={"2.5em"}
                color="lightgray"
                style={{ hover: "bg-yellow-300" }}
              />
              <FaStar
                size={"2.5em"}
                color="lightgray"
                style={{ hover: "bg-yellow-300" }}
              />
              <FaStar
                size={"2.5em"}
                color="lightgray"
                style={{ hover: "bg-yellow-300" }}
              />
              <FaStar
                size={"2.5em"}
                color="lightgray"
                style={{ hover: "bg-yellow-300" }}
              />
              <FaStar
                size={"2.5em"}
                color="lightgray"
                style={{ hover: "bg-yellow-300" }}
              />
              {/* <FaStarHalfAlt size={"2.5em"} /> */}
            </div>
            {/* star */}

            <div>
              <CiBookmark size={"2.5em"} />
            </div>
          </div>
          {/* top */}

          <p className="text-black/70 break-keep leading-7 mb-10">
            {movieData.overview}
          </p>

          <h2 className="font-bold text-md mb-5">시청 가능한 OTT📺</h2>
          <div className="flex gap-5">
            {providerKr?.flatrate?.length > 0
              ? providerKr?.flatrate?.map((provider) => (
                  <div className="w-[100px] text-center">
                    <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden border border-1 border-black/20">
                      <img
                        className=" object-cover"
                        src={W500_URL + provider.logo_path}
                        alt={provider.provider_name}
                      />
                    </div>
                    <p>{provider.provider_name}</p>
                  </div>
                ))
              : "시청 가능한 서비스가 없습니다."}
          </div>
        </div>
        {/* text_wrap */}
      </div>
      {/* 영화 상세정보 sec_2*/}

      <div className="px-[200px] py-[50px] space-x-5">
        <h2 className="font-bold text-2xl mb-5">감독 / 출연진</h2>

        <div className="flex space-x-3">
          <div>
            <div className="w-[120px] h-[150px] rounded-2xl overflow-hidden">
              <img
                className="object-cover"
                src={PROFILE_URL + crewData.profile_path}
                alt={crewData.name}
              />
            </div>
            {/* img_wrap */}

            <div className="w-[120px] text-center">
              <p className="">{crewData.name}</p>
              <p className="text-sm text-black/50">{crewData.job}</p>
            </div>
            {/* text_wrap */}
          </div>
          {/* director */}

          {castData.slice(0, 10).map((cast) => (
            <div key={cast.id}>
              <div className="w-[120px] h-[150px] rounded-2xl overflow-hidden">
                <img
                  className="object-cover"
                  src={PROFILE_URL + cast?.profile_path}
                  alt={cast.name}
                />
              </div>

              <div className="w-[120px] text-center">
                <p className="">{cast.name}</p>
                <p className="text-sm text-black/50">{cast.character}</p>
              </div>
            </div>
          ))}
          {/* cast */}
        </div>
        {/* con_wrap */}
      </div>
      {/* 감독 / 출연진 sec_3*/}

      <div className="px-[200px] py-[50px] flex justify-between">
        <div className="w-[49%]">
          <h2 className="font-bold text-2xl mb-5 ">갤러리</h2>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
          >
            {imageData.backdrops.slice(0, 10).map((backdrop) => (
              <SwiperSlide key={backdrop.file_path}>
                <div>
                  <img src={ORIGINAL_URL + backdrop.file_path} alt="스틸컷" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* 스틸컷 */}

        <div className="w-[49%]">
          <h2 className="font-bold text-2xl mb-5">비디오</h2>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.8}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
          >
            {videoData.results.map((video) => (
              <SwiperSlide key={video.id}>
                <ReactPlayer
                  src={`https://www.youtube.com/watch?v=${video.key}`}
                  controls
                  width="100%"
                  height="235px"
                />
                <h2 className="text-black text-center font-bold">
                  {video.name}
                </h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="px-[200px] py-[50px]"></div>
      {/* OTT */}

      <div className="px-[200px] py-[50px]">
        <h2 className="font-bold text-2xl mb-5">유사한 영화🎞</h2>

        <div
          className="flex
        "
        >
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
          >
            {similarData.results.map((similar) => (
              <SwiperSlide key={similar.id}>
                <Link to={`/detail/${similar.id}`}>
                  <div className=" h-[330px] rounded-lg overflow-hidden">
                    <img
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
      {/* 유사영화 */}
    </div>
  );
}
