// interface SystemContentProps {
//   content: string;
//   genre: string;
// }
interface SystemContentProps {
  content?: string;
  genre?: string;
  myCharacters?: {
    character1?: {
      name?: string;
      age?: number;
      backstory?: string;
    };
    character2?: {
      name?: string;
      age?: number;
      backstory?: string;
    };
  }[];
  myItems?: {
    item1?: {
      name?: string;
      damage?: number;
      description?: string;
    };
    item2?: {
      name?: string;
      damage?: number;
      description?: string;
    };
  }[];
}


// This needs to be moved to the DB once the table is created.
// const SystemContent: SystemContentProps[] = [
//   {
//     content:
//       "You are a story teller crafting a Schi-fi experience for the user in a choose your own adventure format. Provide options for the user each time you craft the story",
//     genre: "Sci-fi",

//   },
//   {
//     content:
//       "You are a story teller crafting a Horror experience for the user in a choose your own adventure format. Provide options for the user each time you craft the story",
//     genre: "Horror",
//   },
//   {
//     content:
//       "You are a story teller crafting a Fantasy experience for the user in a choose your own adventure format. Provide options for the user each time you craft the story",
//     genre: "Fantasy",
//   },
//   {
//     content:
//       "You are a story teller crafting a Noir experience for the user in a choose your own adventure format. Provide options for the user each time you craft the story",
//     genre: "Noir",
//   },
// ];

const SystemContent: SystemContentProps[] = [
  {
    content:
      "You are a story teller crafting a Schi-fi experience for the user in a choose your own adventure format, please remember the characters and items listed to be used at a later time in the story. Provide options for the user each time you craft the story",
    genre: "Sci-fi",
    myCharacters: [
      {
        character1: {
          name: "lisa",
          age: 27,
          backstory: "insert backstory here",
        },
      },
      {
        character2: {
          name: "john",
          age: 35,
          backstory: "insert backstory here",
        },
      },
    ],
    myItems: [
      {
        item1: {
          name: "ice",
          damage: 24,
          description: "black sword",
        },
        item2: {
          name: "thunder",
          damage: 30,
          description: "black axe",
        },
      },
    ],
  },
  {
    content:
      "You are a story teller crafting a Horror experience for the user in a choose your own adventure format. Provide options for the user each time you craft the story",
    genre: "Horror",
    myCharacters: [
      {
        character1: {
          name: "lisa",
          age: 27,
          backstory: "insert backstory here",
        },
      },
      {
        character2: {
          name: "john",
          age: 35,
          backstory: "insert backstory here",
        },
      },
    ],
    myItems: [
      {
        item1: {
          name: "ice",
          damage: 24,
          description: "black sword",
        },
        item2: {
          name: "thunder",
          damage: 30,
          description: "black axe",
        },
      },
    ],
  },
  {
    content:
      "You are a story teller crafting a Fantasy experience for the user in a choose your own adventure format. Provide options for the user each time you craft the story",
    genre: "Fantasy",
    myCharacters: [
      {
        character1: {
          name: "lisa",
          age: 27,
          backstory: "insert backstory here",
        },
      },
      {
        character2: {
          name: "john",
          age: 35,
          backstory: "insert backstory here",
        },
      },
    ],
    myItems: [
      {
        item1: {
          name: "ice",
          damage: 24,
          description: "black sword",
        },
        item2: {
          name: "thunder",
          damage: 30,
          description: "black axe",
        },
      },
    ],
  },
  {
    content:
      "You are a story teller crafting a Noir experience for the user in a choose your own adventure format. Provide options for the user each time you craft the story",
    genre: "Noir",
    myCharacters: [
      {
        character1: {
          name: "lisa",
          age: 27,
          backstory: "insert backstory here",
        },
      },
      {
        character2: {
          name: "john",
          age: 35,
          backstory: "insert backstory here",
        },
      },
    ],
    myItems: [
      {
        item1: {
          name: "ice",
          damage: 24,
          description: "black sword",
        },
        item2: {
          name: "thunder",
          damage: 30,
          description: "black axe",
        },
      },
    ],
  }
];

export default SystemContent;
