import { NO_IMG, PROFILE_URL } from "../../../constant/imgBaseUrl";

export default function Section_3({ crewData, castData }) {
  return (
    <div>
      <div className="space-x-5">
        <h2 className="font-bold text-2xl mb-5">감독 / 출연진</h2>

        <div className="flex space-x-3">
          <div>
            <div className="w-[120px] h-[150px] rounded-2xl overflow-hidden">
              {crewData?.profile_path !== null ? (
                <img
                  className="object-cover"
                  src={PROFILE_URL + crewData.profile_path}
                  alt={crewData.name}
                />
              ) : (
                <img className="h-full " src={NO_IMG} alt={crewData.name} />
              )}
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
                {cast?.profile_path !== null ? (
                  <img
                    className="object-cover"
                    src={PROFILE_URL + cast?.profile_path}
                    alt={cast.name}
                  />
                ) : (
                  <img className="h-full" src={NO_IMG} alt={cast.name} />
                )}
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
    </div>
  );
}
