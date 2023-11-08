import { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { books } from "@/constants/books";
import StorySlider from "./story-slider";

const BooksContainer = () => {
  const [height, setHeight] = useState(window.innerHeight - 58);
  const swiperRef = useRef<SwiperRef | null>(null);

  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === "ArrowUp") {
        swiperRef.current?.swiper.slidePrev();
      } else if (key === "ArrowDown") {
        swiperRef.current?.swiper.slideNext();
      }
    };

    const handleResize = () => {
      setHeight(window.innerHeight - 58);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative flex flex-col w-full flex-grow overflow-hidden">
      <Swiper
        className=" w-full"
        direction="vertical"
        ref={swiperRef}
        style={{
          height: `${height}px`,
        }}
        onSlideChange={(s) => {
          setCurrentBookIndex(s.activeIndex);
        }}
      >
        {books.map((book, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <StorySlider
              height={height}
              currentBook={currentBookIndex === index}
              pages={book.pages}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black opacity-20 select-none" />
    </div>
  );
};

export default BooksContainer;
