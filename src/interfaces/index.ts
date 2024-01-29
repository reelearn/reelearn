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

export type Page = ITextPage | IVideoPage | IPosterPage;

export interface IVideoPage {
  type: "VIDEO";
  src: string;
  title: string;
  tags: string[];
  user: User;
}

export interface ITextPage {
  type: "TEXT";
  textColor: string;
  bgColor: string;
  title?: string;
  text: string;
  audioSrc?: string;
}

export interface IPosterPage {
  type: "POSTER";
  poster: string;
  title?: string;
  titleColor: string;
  bgColor: string;
}
