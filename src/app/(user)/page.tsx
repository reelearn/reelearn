import { Metadata } from "next";

import { books } from "@/constants/books";

// components
import BookContainer from "@/components/custom/BooksContainer";

// metadata
export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <div
      className="flex flex-col flex-grow w-full mx-auto"
      style={{
        paddingBottom: "calc(56px + env(safe-area-inset-bottom))",
        maxWidth: 450,
      }}
    >
      <BookContainer books={books} />
    </div>
  );
};

export default Home;
