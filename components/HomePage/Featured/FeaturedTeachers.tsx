"use client";
import React, { useRef } from "react";
import { TeacherDetails } from "@/dummy-data/TeacherDummy";
import Image from "next/image";

const FeaturedTeachers = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = 350;
      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-full  mx-auto p-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Öne Çıkanlar</h2>

        <div className="flex gap-2">
          <button
            onClick={() => slide("left")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => slide("right")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TeacherDetails.map((teacher, i) => (
          <div
            key={i}
            className="min-w-75 md:min-w-85 snap-start bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-56 w-full bg-gray-100">
              <Image src={teacher.imageUrl} alt={teacher.name} fill className="object-contain object-top" />
              <div className="absolute top-4 right-4 bg-white py-1 px-2.5 rounded-lg flex items-center gap-1 shadow-sm z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.17c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-bold text-gray-900">{teacher.rating || "5.0"}</span>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-1 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-900">${teacher.price}</span>
                  <span className="text-sm text-gray-500 font-medium ml-0.5">/saat</span>
                </div>
              </div>

              <p className="text-blue-500 font-semibold text-sm mb-2">{teacher.field || "Matematik"}</p>

              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{teacher.description}</p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {teacher.topics &&
                  teacher.topics.map((topic: string, index: number) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-md">
                      {topic}
                    </span>
                  ))}
              </div>

              <button className="w-full py-2.5 rounded-xl border border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors cursor-pointer">
                Profili Gör
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTeachers;
