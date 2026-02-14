import Image from "next/image";
import Link from "next/link";

const titles = [
  { title: "Özel Ders Bul", href: "/ozel-ders" },
  { title: "Ders Kategorileri", href: "/kategoriler" },
  { title: "Nasıl Çalışır?", href: "/nasil-calisir" },
  { title: "Öğretmen Ol", href: "/ogretmen-ol" },
  { title: "Fiyatlandırma", href: "/fiyatlandirma" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <div className="relative w-18 h-18">
        <Link href="/">
          <Image src="/icons/logo.webp" fill alt="icon" />
        </Link>
      </div>
      <ul className="flex gap-5 text-black ">
        {titles.map((title, i) => {
          return (
            <li key={i}>
              <Link href={title.href} className="hover:text-blue-600 transition hover:cursor-pointer">
                {title.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-3 items-center">
        <Link href={""}>Giriş Yap</Link>
        <Link href={""} className="bg-blue-500 text-white rounded-2xl px-6 py-3 hover:bg-blue-700 transition">
          Kayıt Ol
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
