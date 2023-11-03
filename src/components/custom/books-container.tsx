import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { books } from "@/constants/books";
import StorySlider from "./story-slider";

const BooksContainer = () => {
  const [height, setHeight] = useState(0);

  const [currentBookIndex, setCurrentBookIndex] = useState(0);

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
