import BooksContainer from "@/components/custom/books-container";
import { books } from "@/constants/books";
import { Book } from "@/interfaces";
import { FC } from "react";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const book = books.find((i) => i.id === params.id);

  return {
    title: book?.name,
  };
}

const Book: FC<Props> = ({ params }) => {
  const { id } = params;

  const book = books.find((i) => i.id === id);

  const newBooks = [book as Book, ...books.filter((i) => i.id !== id)];

  if (!book) {
    return <div>no book</div>;
  } else {
    return (
      <div
        className="flex flex-col flex-grow w-full h-full mx-auto"
        style={{
          paddingBottom: "calc(56px + env(safe-area-inset-bottom))",
          maxWidth: 450,
        }}
      >
        <BooksContainer books={newBooks} />
      </div>
    );
  }
};

export default Book;
