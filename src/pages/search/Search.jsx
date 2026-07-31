import { Link } from "react-router-dom";
import { getDiscover, getGenre, getSearch } from "../api/MovieApi";
import { useEffect, useState } from "react";
import { NO_IMG, W500_URL } from "../../constant/imgBaseUrl";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [genreData, setgenreData] = useState();
  const [selecteGenre, setSelecteGenre] = useState("");
  const [data, setData] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    setSelecteGenre("");

    const searchData = await getSearch(keyword);
    setData(searchData.results);
  };

  const onClickGenre = async (genreId) => {
    setSelecteGenre(genreId);

    setKeyword("");

    const result = await getDiscover(genreId);

    setData(result.results);
  };

  useEffect(() => {
    (async () => {
      const genre = await getGenre();
      setgenreData(genre?.genres);
    })();
  }, []);

  console.log(genreData);

  // console.log(searchData);

  return (
    <div className="px-[30px] lg:px-[50px] xl:px-[200px] py-[100px]">
      <form onSubmit={onSubmit} className="w-full">
        <input
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-full border-2 border-gray-300 px-5 py-3 rounded-2xl "
        />
      </form>

      <div className="flex mt-4 flex-wrap gap-3 xl:gap-4">
        {genreData?.map((genre) => (
          <div
            key={genre.id}
            onClick={() => onClickGenre(genre.id)}
            className={`px-3 py-2 border rounded-4xl  hover:bg-black hover:text-white cursor-pointer 
              ${
                selecteGenre === genre.id
                  ? "bg-black text-white"
                  : "border-gray-400 text-gray-400"
              }`}
          >
            {genre.name}
          </div>
        ))}
      </div>

      {data?.length > 0 ? (
        <div className="mt-[30px] mb-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6">
          {data.map((movie) => (
            <Link key={movie.id} to={`/detail/${movie.id}`} className="group">
              <div className=" overflow-hidden rounded-lg h-[320px] md:h-[350px] xl:h-[400px]">
                <img
                  className="object-cover h-full"
                  src={
                    movie.poster_path ? W500_URL + movie.poster_path : NO_IMG
                  }
                  alt={movie.title}
                />
              </div>
              <h3 className="mt-2 font-semibold">{movie.title}</h3>
              <></>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex justify-center items-center font-semibold text-2xl">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
