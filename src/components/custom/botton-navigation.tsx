import { MdHomeFilled as HomeIcon } from "react-icons/md";
import { MdSettings as SettingsIcon } from "react-icons/md";
import { MdHelp as HelpIcon } from "react-icons/md";
import { MdShare as ShareIcon } from "react-icons/md";
import { RWebShare } from "react-web-share";

const BottomNavigation = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 border-t border-black bg-black"
      style={{
        height: "calc(56px + env(safe-area-inset-bottom))",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <nav
        className="h-full w-full  mx-auto flex-row flex justify-around items-center"
        style={{ maxWidth: 450 }}
      >
        <div className="no-link-highlight select-none basis-0 flex-grow cursor-pointer">
          <div className="select-none flex flex-col items-center justify-center flex-1 transition duration-100 ease-out transform false animate-activate-shrink">
            <HomeIcon className="h-[28px] fill-white stroke-white w-[28px]" />
          </div>
        </div>
        <div className="no-link-highlight select-none basis-0 flex-grow cursor-pointer">
          <div className="select-none flex flex-col items-center justify-center flex-1 transition duration-100 ease-out transform false animate-activate-shrink">
            <SettingsIcon className="h-[28px] fill-white stroke-white w-[28px]" />
          </div>
        </div>
        <div className="no-link-highlight select-none basis-0 flex-grow cursor-pointer">
          <div className="select-none flex flex-col items-center justify-center flex-1 transition duration-100 ease-out transform false animate-activate-shrink">
            <HelpIcon className="h-[28px] fill-white stroke-white w-[28px]" />
          </div>
        </div>
        <RWebShare
          data={{
            text: "Discover a world of knowledge with Reelearn - book summary app! Concise, insightful summaries in just a tap. Dive into the essence of books effortlessly.",
            url: "https://books.reelearn.ai/",
            title: "Reelearn",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <div className="no-link-highlight select-none basis-0 flex-grow cursor-pointer">
            <div className="select-none flex flex-col items-center justify-center flex-1 transition duration-100 ease-out transform false animate-activate-shrink">
              <ShareIcon className="h-[28px] fill-white stroke-white w-[28px]" />
            </div>
          </div>
        </RWebShare>
      </nav>
    </div>
  );
};

export default BottomNavigation;
