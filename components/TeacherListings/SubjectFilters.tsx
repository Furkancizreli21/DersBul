"use client";
import { useState } from "react";
import { FilterSubject } from "@/lib/types";

const ALL_SUBJECTS: FilterSubject[] = [
  { id: "math", label: "Matematik" },
  { id: "physics", label: "Fizik" },
  { id: "chemistry", label: "Kimya" },
  { id: "biology", label: "Biyoloji" },
  { id: "software", label: "Yazılım" },
  { id: "english", label: "İngilizce" },
];

export default function SubjectFilter() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(["math"]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const INITIAL_COUNT = 4;

  const visibleSubjects = isExpanded ? ALL_SUBJECTS : ALL_SUBJECTS.slice(0, INITIAL_COUNT);

  const toggleSubject = (id: string) => {
    if (selectedSubjects.includes(id)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== id));
    } else {
      setSelectedSubjects([...selectedSubjects, id]);
    }
  };

  return (
    <div className="w-64 p-4    border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Dersler</h3>

      <div className="space-y-3">
        {visibleSubjects.map((subject) => {
          const isChecked = selectedSubjects.includes(subject.id);

          return (
            <label key={subject.id} className="flex items-center group cursor-pointer select-none">
              <input type="checkbox" className="hidden" checked={isChecked} onChange={() => toggleSubject(subject.id)} />

              <div
                className={`w-5 h-5 flex items-center justify-center rounded border transition-all duration-200 mr-3
                  ${isChecked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300 group-hover:border-blue-400"}`}
              >
                {isChecked && (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>

              <span className={`text-sm ${isChecked ? "text-gray-900 font-medium" : "text-gray-600"}`}>{subject.label}</span>
            </label>
          );
        })}
      </div>

      {ALL_SUBJECTS.length > INITIAL_COUNT && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-600 text-sm font-semibold flex items-center hover:underline focus:outline-none"
        >
          {isExpanded ? "Daha az göster" : "Daha fazla göster"}
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      )}
    </div>
  );
}
