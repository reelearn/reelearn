import BooksContainer from "@/components/custom/books-container";
import { data } from "@/constants";
import { categories } from "@/constants/categories";
import { Book, Category } from "@/interfaces";
import { FC } from "react";

interface Props {
  params: {
    id: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { id, slug } = params;

  const category = categories.find((i) => i === slug);

  if (!category) {
    return;
  }

  const books = data[category as Category];
  const book = books.find((i) => i.id === id);

  return {
    title: book?.name,
  };
}

const BookPage: FC<Props> = ({ params }) => {
  const { id, slug } = params;

  const category = categories.find((i) => i === slug);

  if (!category) {
    throw Error("No category");
  }

  const books = data[category];
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
export default BookPage;
