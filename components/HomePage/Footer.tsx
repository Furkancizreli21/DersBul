import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 border-t border-gray-100 pt-16 pb-8 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/icons/logo.webp" alt="FooterIcon" fill />
              </div>
              <span className="text-xl font-bold text-gray-900">DersBul</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Özel ders için lider pazar yeri. Öğrencileri onaylanmış uzmanlarla birebir dersler için buluşturuyoruz.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1 lg:col-start-4">
            <h3 className="text-gray-900 font-bold mb-4">Öğren</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Öğretmen Bul
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Online Dersler
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Konuya Göre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Konuma Göre
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Öğret</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Eğitmen Ol
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Eğitmen Kuralları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Başarı Hikayeleri
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Online Eğitim
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Destek</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Güvenlik Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                  Topluluk Kuralları
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 DersBul Inc. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm font-medium">
              Gizlilik
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm font-medium">
              Koşullar
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm font-medium">
              Site Haritası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
