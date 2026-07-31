import { CiBookmark } from "react-icons/ci";
import { W500_URL } from "../../../constant/imgBaseUrl";
import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
import { useState } from "react";
import Rating from "./Rating";

export default function Section_2({ movieData, providerKr }) {
  const providers = [
    ...(providerKr?.flatrate ?? []),
    ...(providerKr?.buy ?? []),
    ...(providerKr?.rent ?? []),
  ];

  const [bookmarked, setBookmarked] = useState(false);

  const Icon = bookmarked ? FaBookmark : FaRegBookmark;

  return (
    <div className="">
      <div className="space-y-5 md:flex md:space-x-5">
        <div className="w-full md:h-[400px] md:w-[250px] rounded-lg overflow-hidden  ">
          <img
            className="h-[100%] object-cover"
            src={W500_URL + movieData.poster_path}
            alt={movieData.title}
          />
        </div>
        {/* img_wrap */}

        <div className="w-full md:w-[80%]">
          <div className="w-full flex justify-between px-5 xl:px-13 py-4 border rounded-2xl border-gray-200 mb-10">
            <Rating />
            <Icon
              size="2em"
              color={bookmarked ? "gold" : "lightgray"}
              className="cursor-pointer transition "
              onClick={() => setBookmarked(!bookmarked)}
            />
          </div>
          {/* top */}

          <p className="text-black/70 break-keep leading-7 mb-10">
            {movieData.overview}
          </p>

          <h2 className="font-bold text-md mb-5">시청 가능한 OTT📺</h2>
          <div className="flex gap-5">
            {providers.length > 0
              ? providers.map((provider) => (
                  <div
                    key={provider.provider_id}
                    className="w-[80px] text-center"
                  >
                    <div className="w-[100%] h-[80px] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        className=" object-cover"
                        src={W500_URL + provider.logo_path}
                        alt={provider.provider_name}
                      />
                    </div>
                    <p className="text-sm">{provider.provider_name}</p>
                  </div>
                ))
              : "시청 가능한 서비스가 없습니다."}
          </div>
        </div>
        {/* text_wrap */}
      </div>
    </div>
  );
}
