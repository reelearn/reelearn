export interface Book {
  id: string;
  user: User;
  pages: Page[];
}

export interface User {
  name: string;
}
// export interface Page {
//   type: "TEXT" | "VIDEO" | "POSTER";
//   content: TextPage | VideoPage | PosterPage;
// }

export type Page = TextPage | VideoPage | PosterPage;

export interface VideoPage {
  type: "VIDEO";
  src: string;
  caption: string;
  tags: string[];
  user: User;
}

export interface TextPage {
  type: "TEXT";
  textColor: string;
  bgColor: string;
  text: string;
}

export interface PosterPage {
  type: "POSTER";
  poster: string;
  title: string;
  titleColor: string;
  bgColor: string;
}
