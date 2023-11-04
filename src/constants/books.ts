import { Book } from "@/interfaces";

export const books: Book[] = [
{
  "pages": [
    {
      "type": "POSTER",
      "content": {
        "poster": "https://www.reelearn.ai/Books/The%20Alchemist%20by%20Paulo%20Coelho/icon.jpg",
        "title": "The Alchemist by Paulo Coelho",
        "titleColor": "#fff",
        "bgColor": "#222024"
      }
    },
    {
      "type": "TEXT",
      "content": {
        "textColor": "black",
        "bgColor": "white",
        "title": "Part 1: The Journey Begins",
        "text": "The Alchemist tells the story of Santiago, a young shepherd who dreams of finding a hidden treasure. He embarks on a journey to fulfill his personal legend, guided by a recurring dream and a mysterious old man. Along the way, Santiago learns important lessons about following his heart and listening to the signs of the universe. He meets an Englishman who is searching for the secret of alchemy, and a beautiful woman named Fatima who becomes his love interest. Santiago also encounters the alchemist, a wise man who teaches him about the importance of pursuing one's dreams and the language of the world."
      }
    },
    {
      "type": "TEXT",
      "content": {
        "textColor": "black",
        "bgColor": "white",
        "title": "Part 2: The Pursuit of Personal Legend",
        "text": "As Santiago continues his journey, he faces various challenges and setbacks. He learns that the universe conspires to help those who are pursuing their personal legends. He meets an oasis where he learns about the concept of the Soul of the World and the principle of favorability. Santiago also learns about the importance of listening to his heart and the omens that guide him towards his treasure. He realizes that fear and doubt are his biggest obstacles, but he must overcome them to achieve his dreams."
      }
    },
    {
      "type": "TEXT",
      "content": {
        "textColor": "black",
        "bgColor": "white",
        "title": "Part 3: The Alchemist's Wisdom",
        "text": "Santiago finally reaches the Egyptian pyramids, where he believes his treasure awaits. However, he is captured by a group of thieves who demand that he reveal the location of the treasure. Santiago uses his knowledge of alchemy to turn himself into the wind and escape. He returns to the oasis, where he reunites with Fatima and the alchemist. The alchemist imparts his final wisdom to Santiago, teaching him that true alchemy is about transforming himself and achieving spiritual enlightenment. Santiago realizes that the treasure he sought was within him all along."
      }
    },
    {
      "type": "TEXT",
      "content": {
        "textColor": "black",
        "bgColor": "white",
        "title": "Part 4: The Power of Dreams",
        "text": "Santiago returns to Spain, where he finds the hidden treasure at the place where his journey began. However, he also realizes that the true treasure lies in the lessons he learned and the transformation he underwent during his journey. He becomes a wealthy man, but he chooses to use his wealth to help others and build a school. Santiago's story teaches us that we all have a personal legend to fulfill and that the pursuit of our dreams is what gives our lives meaning and purpose."
      }
    },
    {
      "type": "TEXT",
      "content": {
        "textColor": "black",
        "bgColor": "white",
        "title": "Part 5: The Language of the World",
        "text": "Throughout his journey, Santiago learns about the language of the world, which is the universal language of signs and omens. He discovers that everything in the universe is interconnected and that by paying attention to the signs, he can navigate his way towards his personal legend. Santiago also learns about the importance of living in the present moment and embracing the beauty of life. He realizes that the universe is always conspiring to help him and that he must trust in its guidance."
      }
    },
    {
      "type": "TEXT",
      "content": {
        "textColor": "black",
        "bgColor": "white",
        "title": "Part 6: The Alchemist's Legacy",
        "text": "The Alchemist leaves us with the powerful message that we all have the ability to transform our lives and pursue our dreams. It reminds us that the journey is often more important than the destination and that true fulfillment comes from following our hearts and embracing the unknown. The book encourages us to listen to the signs and omens that guide us and to have the courage to pursue our personal legends. The Alchemist is a timeless tale that inspires readers to live their lives to the fullest and never give up on their dreams."
      }
    }
  ],
  "user": {
    "name": "Paulo Coelho"
  }
},
{
    user: { name: "User1" },
    pages: [
      {
        content: {
          poster:
            "https://storage.googleapis.com/reelearncontent/videos/Whatsapp%20Videos/43/43_poster.jpg",
          title: "The Alchemist by Paulo Coelho",
          titleColor: "#fff",
          bgColor: "#222024",
        },
        type: "POSTER",
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
        content: {
          poster:
            "https://storage.googleapis.com/reelearncontent/videos/Whatsapp%20Videos/19/19_poster.jpg",
          title: "The Alchemist by Paulo Coelho",
          titleColor: "#fff",
          bgColor: "#222024",
        },
        type: "POSTER",
      },
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
        content: {
          poster:
            "https://storage.googleapis.com/reelearncontent/videos/Whatsapp%20Videos/33/33_poster.jpg",
          title: "The Alchemist by Paulo Coelho",
          titleColor: "#fff",
          bgColor: "#222024",
        },
        type: "POSTER",
      },
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
