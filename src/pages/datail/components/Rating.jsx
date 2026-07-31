import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating() {
  const [rating, setRating] = useState(0);

  const handleClick = (e, star) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;

    if (clickX < width / 2) {
      setRating(star - 0.5);
    } else {
      setRating(star);
    }
  };
  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`w-8 h-8 cursor-pointer ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>

      <p>{rating} / 5</p>
      {/* star */}
    </div>
  );
}
