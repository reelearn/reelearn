import { FC, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Page, PosterPage, TextPage, VideoPage } from "@/interfaces";
import StoryCard from "./story-card";
import VideoCard from "./video-card";
import TextCard from "./text-card";

interface Props {
  height: number;
  pages: Page[];
}

const StorySlider: FC<Props> = ({ height, pages }) => {
  const progressCircle = useRef<SVGSVGElement>(null);

  return (
    <Swiper
      className=" w-full"
      style={{
        height: `${height}px`,
      }}
      // spaceBetween={30}
      // centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      // modules={[Autoplay, Pagination, Navigation]}
      // onAutoplayTimeLeft={(s, time, progress) => {
      //   if (progressCircle?.current) {
      //     progressCircle?.current.style.setProperty(
      //       "--progress",
      //       `${1 - progress}`
      //     );
      //   }
      // }}
    >
      {pages.map((page, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          {page.type === "POSTER" && (
            <StoryCard content={page.content as PosterPage} />
          )}
          {page.type === "TEXT" && (
            <TextCard content={page.content as TextPage} />
          )}
          {page.type === "VIDEO" && (
            <VideoCard
              video={page.content as VideoPage}
              user={{ name: "Sahil Verma" }}
            />
          )}
          <div className="autoplay-progress absolute bottom-3 right-3">
            <svg viewBox="0 0 48 48" ref={progressCircle} className="">
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StorySlider;
