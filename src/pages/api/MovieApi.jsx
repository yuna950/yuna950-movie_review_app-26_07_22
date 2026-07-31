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

// 감독, 배우
export const getCredit = (movie_id) => fetchMovie(`movie/${movie_id}/credits`);

// 예고편
export const getVideo = (movie_id) => fetchMovie(`movie/${movie_id}/videos`);

// ott
export const getProvider = (movie_id) =>
  fetchMovie(`movie/${movie_id}/watch/providers`);

// 유사한 영화
export const getRecommend = (movie_id) =>
  fetchMovie(`movie/${movie_id}/recommendations`);

// 스틸컷
export const getImage = (movie_id) => {
  const url = new URL(baseUrl + `movie/${movie_id}/images`);

  url.searchParams.set("language", "null");

  return fetch(url, options).then((res) => res.json());
};

// 검색
export const getSearch = (keyword) =>
  fetchMovie(`search/movie?query=${keyword}`);

// 장르
export const getGenre = () => fetchMovie(`genre/movie/list`);

// 태그별 검색
export const getDiscover = (genreId) =>
  fetchMovie(`discover/movie?with_genres=${genreId}&sort_by=popularity.desc`);
