"use client";

import { PosterPage } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

interface Props {
  page: PosterPage;
}

const PosterCard: FC<Props> = ({ page }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{
        background: page?.bgColor,
        color: page?.titleColor,
      }}
    >
      <Image
        src={page.poster}
        alt={page?.title as string}
        height={1000}
        width={300}
        className="block aspect-[3/4] object-cover w-[80%] rounded-lg overflow-hidden"
      />
      <p className="text-4xl text-center font-bold">{page.title}</p>
    </div>
  );
};

export default PosterCard;
