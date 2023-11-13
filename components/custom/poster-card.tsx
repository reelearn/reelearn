"use client";

import { PosterPage } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

interface Props {
  content: PosterPage;
}

const PosterCard: FC<Props> = ({ content }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{
        background: content?.bgColor,
        color: content?.titleColor,
      }}
    >
      <Image
        src={content.poster}
        alt={content.title}
        height={1000}
        width={300}
        className="block aspect-[3/4] object-cover w-[80%] rounded-lg overflow-hidden"
      />
      <p className="text-4xl text-center font-bold">{content.title}</p>
    </div>
  );
};

export default PosterCard;
