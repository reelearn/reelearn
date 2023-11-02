import { Book } from "@/interfaces";

export const books: Book[] = [
  {
    pages: [
      {
        content: {
          poster:
            "https://img.freepik.com/premium-photo/iron-man-wallpapers-iphone-android-iron-man-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper-marvel-wallpaper_900775-42297.jpg",
          title: "Iron man",
          titleColor: "#fff",
          bgColor: "#222024",
        },
        type: "POSTER",
      },
      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "white",
          text: "This is the first text page of Book 1.",
        },
      },
      {
        content: {
          src: "/videos/1.mp4", // Replace with a hardcoded value
          caption: "Video 1",
          tags: ["tag1", "tag2"],
        },
        type: "VIDEO",
      },
      {
        type: "TEXT",
        content: {
          textColor: "white",
          bgColor: "pink",
          text: "This is the second text page of Book 1.",
        },
      },
      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "#8c25db",
          text: "This is the third text page of Book 1.",
        },
      },
    ],
    user: {
      name: "Sahil Verma",
    },
  },
  {
    user: { name: "User1" },
    pages: [
      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "white",
          text: "This is the first text page of Book 1.",
        },
      },
      {
        type: "VIDEO",
        content: {
          src: "/videos/2.mp4", // Replace with a hardcoded value
          caption: "A video in Book 1",
          tags: ["tag1", "tag2"],
        },
      },
    ],
  },
  {
    user: { name: "User2" },
    pages: [
      {
        type: "VIDEO",
        content: {
          src: "/videos/3.mp4", // Replace with a hardcoded value
          caption: "Another video in Book 2",
          tags: ["tag3", "tag4"],
        },
      },
      {
        type: "TEXT",
        content: {
          textColor: "blue",
          bgColor: "yellow",
          text: "This is a colorful text page in Book 2.",
        },
      },
    ],
  },
  {
    user: { name: "User3" },
    pages: [
      {
        type: "TEXT",
        content: {
          textColor: "green",
          bgColor: "orange",
          text: "Text page in Book 3.",
        },
      },
      {
        type: "TEXT",
        content: {
          textColor: "red",
          bgColor: "white",
          text: "Another text page in Book 3.",
        },
      },
    ],
  },
  {
    user: { name: "User4" },
    pages: [
      {
        type: "VIDEO",
        content: {
          src: "/videos/1.mp4", // Replace with a hardcoded value
          caption: "Video in Book 4",
          tags: ["tag5", "tag6"],
        },
      },
    ],
  },
  {
    user: { name: "User5" },
    pages: [
      {
        type: "TEXT",
        content: {
          textColor: "purple",
          bgColor: "pink",
          text: "A text page in Book 5.",
        },
      },
    ],
  },
];
