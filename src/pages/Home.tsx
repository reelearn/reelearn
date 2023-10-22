import VideoScrollContainer from "@/components/custom/video-scroll-container";

const Home = () => {
  return (
    <div
      className="flex flex-col flex-grow w-full mx-auto"
      style={{
        paddingBottom: "calc(56px + env(safe-area-inset-bottom))",
        maxWidth: 450,
      }}
    >
      <VideoScrollContainer />
    </div>
  );
};

export default Home;
