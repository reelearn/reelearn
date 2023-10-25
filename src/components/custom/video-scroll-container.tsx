import { videosData } from "@/constants/videos";
import VideoCard from "./video-card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";

const VideoScrollContainer = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight - 58);
  }, []);
  return (
    <div className="relative flex flex-col w-full flex-grow overflow-hidden">
      <Swiper
        className=" w-full"
        direction="vertical"
        style={{
          height: `${height}px`,
        }}
      >
        {videosData.map((video) => (
          <SwiperSlide key={video.id} className="w-full h-full">
            <VideoCard key={video.id} video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="relative flex-grow touch-none overflow-hidden">
        {videosData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div> */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black opacity-20 select-none" />
    </div>
  );
};

export default VideoScrollContainer;
