export interface Book {
  id: string;
  name: string;
  user: User;
  pages: Page[];
}

export type Category = "book";

export interface User {
  name: string;
}

export type Page = TextPage | VideoPage | PosterPage;

export interface VideoPage {
  type: "VIDEO";
  src: string;
  title: string;
  tags: string[];
  user: User;
}

export interface TextPage {
  type: "TEXT";
  textColor: string;
  bgColor: string;
  title?: string;
  text: string;
  audioSrc?: string;
}

export interface PosterPage {
  type: "POSTER";
  poster: string;
  title?: string;
  titleColor: string;
  bgColor: string;
}
