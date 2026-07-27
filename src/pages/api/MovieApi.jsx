const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

const fetchMovie = async (endpoint) => {
  const url = new URL(baseUrl + endpoint);
  url.searchParams.set("language", "ko-kr");

  const response = await fetch(url, options);

  return response.json();
};

// 이번주 화제 영화
export const getTrending = () => fetchMovie("trending/movie/week");

// 영화 리스트
export const getNowPlaying = () => fetchMovie("movie/now_playing");
export const getPopular = () => fetchMovie("movie/popular");
export const getUpComing = () => fetchMovie("movie/upcoming");

// 영화 상세정보
export const getDetail = (movie_id) => fetchMovie(`movie/${movie_id}`);

// 예고편
export const getVideo = (movie_id) => fetchMovie(`movie/${movie_id}/videos`);
