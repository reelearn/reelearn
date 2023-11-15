"use client";

import { TextPage } from "@/interfaces";
import { FC } from "react";

interface Props {
  page: TextPage;
}

const TextCard: FC<Props> = ({ page }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{
        background: page?.bgColor,
        color: page?.textColor,
      }}
    >
      <p className="text-lg text-center w-full p-4">{page?.text}</p>
    </div>
  );
};

export default TextCard;
