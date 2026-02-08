import { TeacherDetails } from "@/dummy-data/TeacherDummy";
import TeachersSlider from "./TeachersSlider";

const FeaturedTeachers = () => {
  return (
    <div className="max-w-400 mx-auto  p-8 md:p-20">
      <TeachersSlider teachers={TeacherDetails}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Öne Çıkanlar</h2>
      </TeachersSlider>
    </div>
  );
};

export default FeaturedTeachers;
