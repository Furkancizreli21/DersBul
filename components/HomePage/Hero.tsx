import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full mt-10 px-4 bg-gray-50/30 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
            <div className="relative w-4 h-4">
              <Image src="/home/verify.png" alt="Onaylı" width={16} height={16} />
            </div>
            <span>Onaylı eğitmenler şu anda mevcut.</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Uzman eğitmenlerle <br />
            <span className="text-blue-600">her konuda</span> uzmanlaşın.
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Kariyerinizde veya derslerinizde ilerlemek için ihtiyacınız olan desteği bugün almaya başlayın.
          </p>
          <div className="bg-white p-3 rounded-2xl shadow-xl shadow-blue-100/50 border border-gray-100 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
            <div className="flex-1 px-3 py-2 border-b md:border-b-0 md:border-r border-gray-100 relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Ders</label>
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5 shrink-0 opacity-50">
                  <Image src="/home/search/graduation-hat.png" alt="icon" fill className="object-contain" />
                </div>
                <input
                  type="text"
                  placeholder="Matematik, İngilizce..."
                  className="w-full text-sm font-semibold text-gray-700 outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            <div className="flex-1 px-3 py-2 relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Konum</label>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Online veya Şehir"
                  className="w-full text-sm font-semibold text-gray-700 outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 md:py-0 md:h-14 font-bold transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 shrink-0 mt-2 md:mt-0 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span>Ara</span>
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="relative w-8 h-8">
                <Image src="/home/verified2.png" alt="verified" fill />
              </div>
              <span className="text-slate-500 text-sm">Ücretsiz İptal</span>
            </div>
            <div className="flex items-center">
              <div className="relative w-8 h-8">
                <Image src="/home/verified2.png" alt="verified" fill />
              </div>
              <span className="text-slate-500 text-sm">Doğrulanmış Profiller</span>
            </div>
          </div>
        </div>

        <div className="relative h-125 w-full flex items-center justify-center mt-10 lg:mt-0">
          <div className="absolute inset-4 bg-blue-100 rounded-[2.5rem] rotate-6 transform translate-x-2 translate-y-2 z-0" />
          <div className="relative w-full h-full z-10 p-4">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 bg-gray-200">
              <Image src="/home/home.webp" alt="Özel ders çalışan öğrenciler" fill className="object-cover" priority />
            </div>
          </div>
          <div className="absolute bottom-10 -left-20 lg:left-15 z-20 animate-bounce-slow">
            <div className="bg-white p-4 pr-6 rounded-2xl flex items-center gap-4 max-w-70">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <div className="relative w-6 h-6">
                  <Image src="/home/uptrend.png" alt="Yükseliş" fill className="object-contain" />
                </div>
              </div>

              <div className="flex flex-col ">
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Öğrenci İlerlemesi</span>
                <span className="text-gray-900 font-bold text-lg">Notlar +24% </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
