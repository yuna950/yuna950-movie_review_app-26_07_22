import { Link } from "react-router-dom";
import { ORIGINAL_URL } from "../../../constant/imgBaseUrl";

export default function Section_1({ data }) {
  if (!data) return null;
  console.log(data);

  return (
    <div
      className="w-full h-[80vh] mt-[60px] bg-gray-400 relative"
      style={{
        background: `url(${ORIGINAL_URL}${data.backdrop_path}) no-repeat center / cover`,
      }}
    >
      <h2 className="absolute left-[200px] top-[100px] text-white/80 font-medium text-lg">
        이번주 화제의 영화🍿
      </h2>

      <div className="text-white absolute left-[200px] bottom-[100px]">
        <h2 className=" font-bold text-[70px] ">{data.title}</h2>
        <p className="text-white/50 w-[550px] mb-5">
          {data.overview.slice(0, 100) + "..."}
        </p>
        <div className="text-white/50 border-b border-white/50 w-[80px] pb-2 hover:text-white hover:border-white transition cursor-pointer">
          <Link to={`/movie/${data.id}`}>자세히 보기</Link>
        </div>
      </div>
    </div>
  );
}
