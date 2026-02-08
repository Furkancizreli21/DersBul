const Sponsor = () => {
  return (
    <div className="w-full py-10 border-t border-b border-gray-100  bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">Türkiye'nin Yükselen Eğitim Platformu</h2>
          <p className="text-gray-500 font-medium">Geleceğini şekillendirmek isteyenlerin ortak buluşma noktası.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 group cursor-default select-none">
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-blue-600 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
            </svg>
            <span className="font-bold text-xl text-gray-500 group-hover:text-gray-800 transition-colors">EduCenter</span>
          </div>

          <div className="flex items-center gap-2 group cursor-default select-none">
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-blue-600 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z" />
            </svg>
            <span className="font-bold text-xl text-gray-500 group-hover:text-gray-800 transition-colors">Scholar</span>
          </div>

          <div className="flex items-center gap-2 group cursor-default select-none">
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-blue-600 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9,21C9,21.55 9.45,22 10,22H14C14.55,22 15,21.55 15,21V20H9V21M12,2C8.14,2 5,5.14 5,9C5,11.38 6.19,13.47 8,14.74V17C8,17.55 8.45,18 9,18H15C15.55,18 16,17.55 16,17V14.74C17.81,13.47 19,11.38 19,9C19,5.14 15.86,2 12,2M12,13C10.65,13 9.46,12.28 8.8,11.19C8.5,10.71 8.65,10.08 9.13,9.78C9.61,9.48 10.24,9.63 10.54,10.11C10.82,10.57 11.37,10.89 12,10.89C12.63,10.89 13.18,10.57 13.46,10.11C13.76,9.63 14.39,9.48 14.87,9.78C15.35,10.08 15.5,10.71 15.2,11.19C14.54,12.28 13.35,13 12,13Z" />
            </svg>
            <span className="font-bold text-xl text-gray-500 group-hover:text-gray-800 transition-colors">BrightMind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
