"use client";
import { photoApi } from "@/src/api";
import Pagination from "@/src/components/common/pagination";
import Title from "@/src/components/common/title";
import Photos from "@/src/components/photos";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useMemo, useState } from "react";
import { IPhotoItem } from "../photos/photo-item";

export interface IPhotosPageProps {}

const PhotosPage: FC<IPhotosPageProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageParams = useMemo(() => searchParams.get("page") || 1, [searchParams]);

  const [photos, setPhotos] = useState<IPhotoItem[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [filter, setFilter] = useState({ searchValue: "", page: 1, limit: 10 });

  const { limit, page, searchValue } = filter;

  useEffect(() => {
    setFilter({ ...filter, page: Number(pageParams) || 1 });
  }, [pageParams]);

  const handleFilterTextChange = (text: string) => {
    setFilter({ ...filter, page: 1, searchValue: text });
  };

  const handleChangePage = (currentPage: number) => {
    router.push(`${pathname}?page=${currentPage}`, { scroll: true });
  };

  useEffect(() => {
    photoApi.getPhotos(filter).then(({ data }) => {
      setPhotos(data.data);
      setTotalPage(data.total);
    });
  }, [limit, page, searchValue]);

  return (
    <>
      <Title title="Photo" />
      <Photos className="mt-2">
        <Photos.Filter className="mt-2" value={searchValue} onTextChange={handleFilterTextChange} />
        <Photos.List className="mt-2" items={photos} />
      </Photos>
      <Pagination className="mt-2" currentPage={page} totalItems={totalPage} onChangePage={handleChangePage} />
    </>
  );
};

PhotosPage.displayName = "PhotosPage";

export default PhotosPage;
