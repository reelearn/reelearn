import { MdHomeFilled as HomeIcon } from "react-icons/md";

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
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="no-link-highlight select-none basis-0 flex-grow cursor-pointer"
          >
            <div className="select-none flex flex-col items-center justify-center flex-1 transition duration-100 ease-out transform false animate-activate-shrink">
              <HomeIcon className="h-[28px] fill-white stroke-white w-[28px]" />
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavigation;
