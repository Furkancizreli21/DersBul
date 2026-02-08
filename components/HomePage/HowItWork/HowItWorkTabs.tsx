"use client";
import { useState } from "react";
import StudentSteps from "./StudentSteps";
import TeacherSteps from "./TeacherSteps";

const HowItWorkTabs = () => {
  const [isActive, setIsActive] = useState<"student" | "teacher">("student");

  const base = "px-6 py-2 rounded-full cursor-pointer text-sm font-semibold transition-all";

  return (
    <>
      <div className="flex justify-center">
        <div className="flex p-1.5 bg-white rounded-full border border-slate-300 shadow-sm">
          <button
            className={`${base} ${isActive === "student" ? "bg-blue-600 text-white" : "text-black"}`}
            onClick={() => setIsActive("student")}
          >
            Öğrenciler
          </button>

          <button
            className={`${base} ${isActive === "teacher" ? "bg-blue-600 text-white" : "text-black"}`}
            onClick={() => setIsActive("teacher")}
          >
            Öğretmenler
          </button>
        </div>
      </div>

      {isActive === "student" ? <StudentSteps /> : <TeacherSteps />}
    </>
  );
};

export default HowItWorkTabs;
