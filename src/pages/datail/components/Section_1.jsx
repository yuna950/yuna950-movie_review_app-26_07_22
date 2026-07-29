import { ORIGINAL_URL } from "../../../constant/imgBaseUrl";

export default function Section_1({ movieData }) {
  return (
    <div>
      <div
        className="w-full h-[60vh] overflow-hidden relative mt-[60px]"
        style={{
          background: `linear-gradient(
                      to top,
                      rgba(0,0,0,0.6),
                      rgba(0,0,0,0.2)
                    ), url(${ORIGINAL_URL}${movieData.backdrop_path}) no-repeat center / cover`,
        }}
      >
        <div className="absolute left-[30px] lg:left-[50px] xl:left-[200px] bottom-[100px]">
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
    </div>
  );
}
