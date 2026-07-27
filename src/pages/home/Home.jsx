import { useEffect, useState } from "react";
import Section_1 from "./components/Section_1";
import {
  getTrending,
  getNowPlaying,
  getPopular,
  getUpComing,
} from "../api/MovieApi";
import Loading from "../../components/Loading";
import Section_2 from "./components/Section_2";

export default function Home() {
  const [trendData, setTrendData] = useState();
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const trending = await getTrending();
        setTrendData(trending.results[0]);
        // 화제작

        const [popular, nowPlaying, upComing] = await Promise.all([
          getPopular(),
          getNowPlaying(),
          getUpComing(),
        ]);
        setMovieData({ popular, nowPlaying, upComing });
        // 영화 리스트
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const getPopularData = movieData?.popular;
  const getNowPlayingData = movieData?.nowPlaying;
  const getUpComingData = movieData?.upComing;

  console.log(getPopularData);

  return (
    <div>
      <Section_1 data={trendData} />
      <Section_2 data={getPopularData} title={"인기 영화🔥"} />
      <Section_2 data={getNowPlayingData} title={"현재 상영작🍿"} />
      <Section_2 data={getUpComingData} title={"개봉 예정작🎬"} />
    </div>
  );
}
