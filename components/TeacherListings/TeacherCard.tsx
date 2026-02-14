import Image from "next/image";

export interface Teacher {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  price: number;
  title: string;
  tags?: string[];
  description: string;
  isTopRated?: boolean;
}

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 max-w-sm font-sans">
      <div className="flex justify-between items-start mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100">
            <Image src={teacher.imageUrl} alt={teacher.name} width={80} height={80} className="object-cover" />
          </div>

          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <div className="flex flex-col items-end gap-2">
          {teacher.isTopRated && (
            <div className="bg-[#FFF9EB] text-[#D97706] px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold border border-[#FDE68A]">
              <span>★</span> Top Rated
            </div>
          )}
          <div className="text-gray-900">
            <span className="text-2xl font-black">₺{teacher.price}</span>
            <span className="text-gray-500 font-medium text-sm ml-1">/saat</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-[22px] font-black text-[#1F2937] leading-tight">{teacher.name}</h3>
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-[#3B82F6] font-bold text-sm leading-tight">{teacher.title}</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#FBBF24] text-lg">★</span>
        <span className="font-black text-gray-900">{teacher.rating}</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-500 underline decoration-gray-300 font-medium">{teacher.reviewCount} reviews</span>
      </div>

      <p className="text-[#64748B] text-[15px] leading-relaxed mb-6 line-clamp-3">{teacher.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {teacher.tags?.map((tag) => (
          <span key={tag} className="bg-[#F1F5F9] text-[#475569] px-4 py-1.5 rounded-lg text-sm font-bold">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <button className="flex-1 py-2 cursor-pointer  rounded-xl border-2 border-gray-200 text-[#374151] font-bold text-[15px] hover:bg-gray-50 transition-colors">
          View Profile
        </button>
        <button className="flex-1 py-2  cursor-pointer rounded-xl bg-[#1D82F6] text-white font-bold text-[15px] hover:bg-blue-600 transition-colors shadow-sm">
          Book Trial
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
