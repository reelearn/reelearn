import BooksContainer from "@/components/custom/books-container";
import { books } from "@/constants/books";

const Home = () => {
  return (
    <div
      className="flex flex-col flex-grow w-full mx-auto"
      style={{
        paddingBottom: "calc(56px + env(safe-area-inset-bottom))",
        maxWidth: 450,
      }}
    >
      <BooksContainer books={books} />
    </div>
  );
};

export default Home;
