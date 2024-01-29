"use client";

import { IPosterPage } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

interface Props {
  page: IPosterPage;
}

const PosterPage: FC<Props> = ({ page }) => {
  return (
    <div
      className="w-full flex-shrink-0 h-full flex flex-col items-center justify-center gap-4"
      style={{
        background: page?.bgColor,
        color: page?.titleColor,
      }}
    >
      <Image
        src={page.poster}
        alt={page?.title as string}
        height={480}
        width={360}
        priority
        className="block aspect-[3/4] object-contain w-[80%] rounded-lg overflow-hidden"
      />
      <p className="text-4xl text-center font-bold">{page.title}</p>
    </div>
  );
};

export default PosterPage;
