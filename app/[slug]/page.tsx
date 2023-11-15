import { categories } from "@/constants/categories";

import { FC } from "react";

interface Props {
  params: { slug: string };
}

const Book: FC<Props> = ({ params }) => {
  const { slug } = params;

  const category = categories.find((i) => i === slug);

  if (!category) {
    return <div>no book</div>;
  } else {
    return <div>{category}</div>;
  }
};

export default Book;
