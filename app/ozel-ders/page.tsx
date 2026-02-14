// @/app/ozel-ders/page.tsx (veya dosya yolunuz neresiyse)

import SubjectFilter from "@/components/TeacherListings/SubjectFilters";
import RatingFilter from "@/components/TeacherListings/RatingFilters";
import PriceFilters from "@/components/TeacherListings/PriceFilters";
import TeachersGrid from "@/components/TeacherListings/TeachersGrid";
import Pagination from "@/components/TeacherListings/Pagination";
import { teachers as allTeachers } from "@/dummy-data/Teachers";

const PAGE_SIZE = 6;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function OzelDers({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  const currentPage = Number(resolvedSearchParams?.page ?? "1");

  console.log("Current Page:", currentPage);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const paginatedTeachers = allTeachers.slice(start, end);
  const totalPages = Math.ceil(allTeachers.length / PAGE_SIZE);

  return (
    <main className="grid grid-cols-4 p-10 gap-10 min-h-screen bg-zinc-100">
      <aside className="col-span-1 space-y-6">
        <PriceFilters />
        <hr />
        <SubjectFilter />
        <hr />
        <RatingFilter />
      </aside>

      <section className="col-span-3 flex flex-col gap-10">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Mükemmel Öğretmenini Bul</h1>
            <p className="text-slate-400 text-sm">{allTeachers.length} öğretmen gösteriliyor.</p>
          </div>
        </header>

        <TeachersGrid teachers={paginatedTeachers} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    </main>
  );
}
