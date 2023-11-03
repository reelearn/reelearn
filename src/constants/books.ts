import { Book } from "@/interfaces";

export const books: Book[] = [
  {
    pages: [
      {
        content: {
          poster:
            "https://www.reelearn.ai/Books/The%20Alchemist%20by%20Paulo%20Coelho/icon.jpg",
          title: "The Alchemist by Paulo Coelho",
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
          text: "In the first part of The Alchemist, we meet Santiago, a young shepherd boy who dreams of finding treasure at the Egyptian pyramids. Santiago is content with his simple life, but he can't shake the feeling that there is something more out there for him. He consults a gypsy woman who tells him that his dream is significant and advises him to follow it. Santiago is skeptical at first, but he decides to take a leap of faith and pursue his dream.",
        },
      },

      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "white",
          text: "In this part, Santiago meets Melchizedek, the king of Salem, who encourages him to pursue his Personal Legend. Melchizedek explains that a Personal Legend is a person's true purpose in life, and that everyone has one. He also introduces Santiago to the concept of the Soul of the World, which is the underlying force that connects all living things. Santiago is inspired by Melchizedek's wisdom and decides to sell his sheep and embark on his journey to find his treasure.",
        },
      },
      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "white",
          text: "In this part, Santiago travels to Tangier, a bustling city in North Africa. He hopes to find a caravan that will take him closer to the pyramids. However, he encounters a thief who steals all his money. Santiago is devastated and begins to doubt whether he made the right decision to pursue his dream. He considers giving up and going back to his old life, but then he meets an Englishman who tells him about an alchemist in the desert who might be able to help him.",
        },
      },
      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "white",
          text: "Santiago arrives in the desert and meets the alchemist, a wise and mysterious man. The alchemist agrees to help Santiago on his journey and teaches him important lessons about listening to his heart and following the signs that the universe provides. The alchemist also introduces Santiago to the concept of the Philosopher's Stone, which represents the ultimate goal of alchemy. Santiago learns that the real treasure he is seeking is not material wealth, but spiritual enlightenment.",
        },
      },
      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "white",
          text: "In this part, Santiago undergoes a series of trials and challenges as he continues his journey across the desert. He learns to communicate with the desert, the wind, and the sun, and gains a deeper understanding of the Soul of the World. Santiago also falls in love with a girl named Fatima, but he must choose between staying with her or continuing his quest for his Personal Legend. Santiago realizes that he cannot abandon his dream and must continue on his path.",
        },
      },
      {
        type: "TEXT",
        content: {
          textColor: "black",
          bgColor: "white",
          text: "In the final part of the book, Santiago finally reaches the Egyptian pyramids. However, he is captured by a group of thieves who demand to know where the treasure is. Santiago realizes that the treasure was within him all along and that the journey itself was the real treasure. He manages to escape and returns to the oasis, where he finds Fatima waiting for him. They embrace and Santiago shares his newfound wisdom with the people of the oasis. Santiago's journey ends with the realization that true fulfillment comes from following one's heart and pursuing one's dreams.",
        },
      },
    ],
    user: {
      name: "Paulo Coelho",
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
          src: "https://content.reelearn.ai/videos/Whatsapp%20Videos/43/43%20(English%20Compress).mp4", // Replace with a hardcoded value
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
          src: "https://content.reelearn.ai/videos/Whatsapp%20Videos/19/19%20(English%20Compress).mp4", // Replace with a hardcoded value
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
          src: "https://content.reelearn.ai/videos/Whatsapp%20Videos/33/33%20(English%20Compress).mp4", // Replace with a hardcoded value
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
