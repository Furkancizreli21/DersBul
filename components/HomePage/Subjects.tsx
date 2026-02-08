import { subjects } from "@/dummy-data/Subjects";
const SubjectCard = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-start">Popüler Dersler</h2>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {subjects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 border border-gray-100  rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className={`p-4 rounded-full mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectCard;
