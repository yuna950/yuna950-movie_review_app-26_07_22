import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail, getVideo } from "../api/MovieApi";
import Loading from "../../components/Loading";
import { W500_URL } from "../../constant/imgBaseUrl";
import ReactPlayer from "react-player";

export default function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
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

  const trailer = videoData?.results[0];
  console.log(trailer);

  return (
    <div>
      <div>
        {trailer && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
            controls
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <img src={W500_URL + movieData.poster_path} alt={movieData.title} />
      </div>
    </div>
  );
}
