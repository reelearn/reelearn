"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import BookSlider from "./book-slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Mousewheel } from "swiper/modules";
import { Book } from "@/interfaces";

interface Props {
  books: Book[];
}

const BooksContainer: FC<Props> = ({ books }) => {
  const [height, setHeight] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    // setting height for first
    setHeight(window.innerHeight - 58);

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
        mousewheel={true}
        slidesPerView={1}
        modules={[Mousewheel]}
        onSlideChange={(s) => {
          setCurrentBookIndex(s.activeIndex);
          router.replace(`/book/${books[s.activeIndex].id}`);
        }}
      >
        {books.map((book, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <BookSlider
              height={height}
              currentBook={currentBookIndex === index}
              book={book}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black opacity-20 select-none" />
    </div>
  );
};

export default BooksContainer;
