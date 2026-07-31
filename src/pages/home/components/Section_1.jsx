import { Link } from "react-router-dom";
import { ORIGINAL_URL } from "../../../constant/imgBaseUrl";

export default function Section_1({ data }) {
  // console.log(data);

  return (
    <div
      className="w-[98%] h-[80vh] mt-[60px] m-auto rounded-2xl bg-gray-400 relative"
      style={{
        background: `url(${ORIGINAL_URL}${data.backdrop_path}) no-repeat center / cover`,
      }}
    >
      <h2 className="absolute left-[30px] lg:left-[50px] xl:left-[200px] top-[50px] xl:top-[100px] text-white font-medium text-md xl:text-lg">
        이번주 화제의 영화🍿
      </h2>

      <div className="text-white absolute left-[30px] lg:left-[50px] xl:left-[200px] bottom-[50px] xl:bottom-[100px]">
        <h2 className=" font-bold text-2xl lg:text-4xl xl:text-6xl mb-4 ">
          {data.title}
        </h2>
        <p className="text-white/70 w-[70%] text-sm lg:text-md mb-6 xl:mb-5">
          {data.overview.slice(0, 100) + "..."}
        </p>
        <div className="text-white/70 border-b border-b-2 border-white/50 w-[80px] pb-2 hover:text-white hover:border-white transition cursor-pointer">
          <Link to={`/detail/${data.id}`}>자세히 보기</Link>
        </div>
      </div>
    </div>
  );
}
