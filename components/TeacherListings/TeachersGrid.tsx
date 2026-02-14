import { Teacher } from "@/lib/types";
import TeacherCard from "./TeacherCard";

interface Props {
  teachers: Teacher[];
}

const TeachersGrid = ({ teachers }: Props) => {
  return (
    <ul className="grid grid-cols-3 gap-6">
      {teachers.map((teacher) => (
        <li key={teacher.id}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
};

export default TeachersGrid;
