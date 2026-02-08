import React from "react";

const Steps = () => {
  return (
    <div>
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
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              />
            </svg>
          </div>

          <span className="font-bold text-xl text-gray-900">1. Profilini Oluştur</span>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Uzmanlık alanlarını, deneyimini ve çalışma koşullarını ekleyerek güçlü bir profil oluştur.
          </p>
        </div>

        {/* ADIM 2 */}
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>

          <span className="font-bold text-xl text-gray-900">2. Ders Planını Hazırla</span>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Müsaitlik durumunu belirle, ders ücretlerini ve öğretim materyallerini düzenle.
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
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>

          <span className="font-bold text-xl text-gray-900">3. Öğretmeye Başla</span>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Öğrencilerle bağlantı kur, online veya yüz yüze dersler ver ve kazanmaya başla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
