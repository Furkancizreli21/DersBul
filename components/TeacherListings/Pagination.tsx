"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack spacing={2} alignItems="center">
      <MuiPagination count={totalPages} page={currentPage} onChange={handleChange} color="primary" size="large" />
    </Stack>
  );
}
