export interface Book {
  user: User;
  pages: Page[];
}

export interface Page {
  type: "TEXT" | "VIDEO" | "POSTER";
  content: TextPage | VideoPage | PosterPage;
}

export interface VideoPage {
  src: string;
  caption: string;
  tags: string[];
}

export interface TextPage {
  textColor: string;
  bgColor: string;
  text: string;
}

export interface User {
  name: string;
}

export interface PosterPage {
  poster: string;
  title: string;
  titleColor: string;
  bgColor: string;
}
