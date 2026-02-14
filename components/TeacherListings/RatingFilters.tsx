"use client";
import { useState } from "react";
const RATINGS: number[] = [4, 3, 2];

export default function RatingFilter() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingChange = (value: number) => {
    if (selectedRating === value) {
      setSelectedRating(null);
    } else {
      setSelectedRating(value);
    }
  };

  const renderStars = (count: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < count ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="w-64 p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Puan</h3>

      <div className="space-y-3">
        {RATINGS.map((rating) => (
          <label key={rating} className="flex items-center cursor-pointer group select-none">
            <input
              type="radio"
              name="rating_filter"
              className="hidden"
              checked={selectedRating === rating}
              onChange={() => handleRatingChange(rating)}
            />

            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 transition-all duration-200
              ${selectedRating === rating ? "border-blue-600" : "border-gray-300 group-hover:border-blue-400"}`}
            >
              {selectedRating === rating && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
            </div>

            <div className="flex items-center gap-1">
              <div className="flex">{renderStars(rating)}</div>
              <span className="text-sm text-gray-600 font-medium ml-1">& Üzeri</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
