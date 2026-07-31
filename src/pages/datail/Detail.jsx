import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCredit,
  getDetail,
  getImage,
  getProvider,
  getRecommend,
  getVideo,
} from "../api/MovieApi";
import Loading from "../../components/Loading";

import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";
import Section_5 from "./components/Section_5";
import Similar from "./components/Similar";
import { useScrollTop } from "../../lib/useScrollTop";
import PageTitle from "../../components/PageTitle";

export default function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [creditData, setCreditData] = useState();
  const [providerData, setProviderData] = useState();

  const [recommendData, setRecommendData] = useState();
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(true);
  useScrollTop();

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

        const recommendData = await getRecommend(id);
        setRecommendData(recommendData);
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

  const castData = creditData?.cast;
  const crewData = creditData?.crew.find((crew) => crew.job === "Director");
  const providerKr = providerData?.results.KR;

  // console.log(creditData);

  return (
    <div>
      <PageTitle title={movieData.title} />
      <Section_1 movieData={movieData} />
      {/* hero_section */}
      <div className="px-[30px] lg:px-[50px] xl:px-[200px] py-[50px] xl:py-[100px] space-y-[100px] xl:space-y-[150px]">
        <Section_2 movieData={movieData} providerKr={providerKr} />
        {/* 영화 상세정보*/}
        <Section_3 crewData={crewData} castData={castData} />
        {/* 감독 / 출연진*/}
        <Section_4 data={imageData} />
        {/* 스틸컷 */}
        <Section_5 data={videoData} />
        {/* 예고편 */}
        <Similar similarData={recommendData} />
        {/* 유사영화 */}
      </div>
    </div>
  );
}
