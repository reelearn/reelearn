import { videosData } from "@/constants/videos";
import VideoCard from "./video-card";

const VideoScrollContainer = () => {
  return (
    <div className="relative flex flex-col w-full flex-grow overflow-hidden">
      <div className="relative flex-grow touch-none overflow-hidden">
        {videosData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black opacity-20 select-none" />
    </div>
  );
};

export default VideoScrollContainer;
