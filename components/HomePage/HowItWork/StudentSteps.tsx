const StudentSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
      {/* ADIM 1 */}
      <div className="flex flex-col gap-4 items-center text-center group">
        <div className="bg-white p-5 rounded-full shadow-lg text-blue-600 group-hover:scale-110 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <span className="font-bold text-xl text-gray-900">1. Eğitmenini Bul</span>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Binlerce onaylı profil arasından uzmanlık alanı, fiyat ve yorumlara göre sana en uygun eğitmeni seç.
        </p>
      </div>

      {/* ADIM 2 */}
      <div className="flex flex-col gap-4 items-center text-center group">
        <div className="bg-white p-5 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" className="fill-blue-500" />
            <path d="M6 8H18V6H6V8ZM6 12H18V10H6V12ZM6 16H14V14H6V16Z" fill="white" />
          </svg>
        </div>

        <span className="font-bold text-xl text-gray-900">2. Dersini Planla</span>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Eğitmenle iletişime geç, takvimine uygun gün ve saati belirleyerek ders randevunu oluştur.
        </p>
      </div>

      {/* ADIM 3 */}
      <div className="flex flex-col gap-4 items-center text-center group">
        <div className="bg-white p-5 rounded-full shadow-lg text-blue-600 group-hover:scale-110 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </div>

        <span className="font-bold text-xl text-gray-900">3. Öğrenmeye Başla</span>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Online veya yüz yüze derslerine başla, hedeflerine ulaş ve gelişimini takip et.
        </p>
      </div>
    </div>
  );
};

export default StudentSteps;
