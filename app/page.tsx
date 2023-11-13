import BooksContainer from "@/components/custom/books-container";
import ThemeToggle from "@/components/custom/theme-toggle";

const Home = () => {
  return (
    <div
      className="flex flex-col flex-grow w-full mx-auto"
      style={{
        paddingBottom: "calc(56px + env(safe-area-inset-bottom))",
        maxWidth: 450,
      }}
    >
      <BooksContainer />
    </div>
  );
};

export default Home;
