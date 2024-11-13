
interface SystemContentProps {
    content?: string;
    genre?: string; // purpose is to start the typoe of story, bu then to remind ai what type it is each time
    storySofar?: string;  //will need to summarize somhow; prb have chatgpt output a summary of each subgoal finale on the backend & save to DB total summary
    mainGoal?: string;
    currentSubGoal?: string; // what's the current main goal i.e. main goal slain dragon of west, sub goal escape catacombs

    // for these two: maybe have chatgpt always output a timeframe to us to save to DB
    currentTotalGameTime?: string; // GAME TIME not real world
    currentTimeElapsedInSubGoal?: string; // this way we can monitor if sub goal has not or has gone too long

    worldPlaces?: {
        
    };

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

  let contentStruct = {

    // what ai just sent as the current scene
    // what adventurers actions are in response
    // ask it to say what happens next (maybe decide a specific timeframe)

  }
  


  
  const SystemContent: SystemContentProps[] = [
    {
      content:
        "You are a story teller crafting a Schi-fi experience for the user in a choose your own adventure format, please remember the characters and items listed to be used at a later time in the story. Provide options or an open ended response the user each time you craft the story",
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
    },
  ];
  
  export default SystemContent;
  