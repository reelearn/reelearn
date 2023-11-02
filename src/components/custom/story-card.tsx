import { PosterPage } from "@/interfaces";
import { FC } from "react";

interface Props {
  content: PosterPage;
}

const StoryCard: FC<Props> = ({ content }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{
        background: content?.bgColor,
        color: content?.titleColor,
      }}
    >
      <img
        src="https://img.freepik.com/premium-photo/iron-man-wallpapers-iphone-android-iron-man-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper_900775-42297.jpg"
        alt=""
        className="block aspect-[3/4] object-cover w-[80%] rounded-lg overflow-hidden"
      />
      <p className="text-4xl font-bold">{content.title}</p>
    </div>
  );
};

export default StoryCard;
