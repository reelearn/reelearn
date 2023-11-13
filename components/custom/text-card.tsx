"use client";

import { TextPage } from "@/interfaces";
import { FC } from "react";

interface Props {
  content: TextPage;
}

const TextCard: FC<Props> = ({ content }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{
        background: content?.bgColor,
        color: content?.textColor,
      }}
    >
      <p className="text-lg text-center w-full p-4">{content?.text}</p>
    </div>
  );
};

export default TextCard;
