const Ready = () => {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto ">
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-lg overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">Öğrenmeye başlamaya hazır mısın?</h2>
          <p className="text-slate-200  font-medium">
            Hedeflerine ulaşan binlerce öğrencinin arasına sen de katıl. Hayalindeki yeteneği bugün kazanmaya başla.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="px-8 py-3 bg-white text-blue-600 font-bold text-base rounded-xl hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap cursor-pointer">
            Öğretmen Bul
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold text-base rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer">
            Eğitmen Ol
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ready;
