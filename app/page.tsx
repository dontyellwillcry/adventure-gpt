"use client";
import axios from "axios";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import GenreButton from "./components/genres/GenreButton";
import SystemContent from "../lib/sysContent/systemContent";
import Backgrounds from "../lib/backgrounds/backgrounds";
import ActionButtons from "./components/actions/ActionButtons";
import FetchItems from "./components/fetchItems/FetchItems";
import FetchUsers from "./components/fetchUsers/FetchUsers";


// This is a static array of genres that will be used to render the genre buttons
const genres = ["Sci-fi", "Horror", "Fantasy", "Noir"];

export default function Home() {
  const [playerActions, setPlayerActions] = useState<string>(""); // The user's input
  const [response, setResponse] = useState<string>(""); // The response from openai
  const [content, setContent] = useState<string>(""); // When the user selects the genre, a content query is saved for the api request
  const [currentGenre, setCurrentGenre] = useState<string>(""); // When the Genre is selected its added to this state to trigger the background

  // const [sysContent, setSysContent] = useState<SystemContentProps>({});

  useEffect(() => {
    FetchItems();
    FetchUsers();
  }, []);

  // prettier-ignore
  // Client side request to our server. with both "content" and "playerAction" as arguments
  const fetchChatGpt = async () => {
    try {
      const res = await axios.post("/api/openai", { content, playerActions },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(res.data.message.content);
      setContent(res.data.message.content);/* Before adding this setContent, anytime the user chose a option provided by openai and then submitted 
       that option the same content was sent to chatgpt (see sysContent inside lib folder) so anytime the user made a choice there was no connection to the
       precious response from chatgpt. This is not a long term fix*/
      console.log("This is inside the fetchChatGPT: ", res.data.message.content);
    } catch (error) {
      console.error("There was a problem fetching from openai:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlayerActions(e.target.value);
    console.log(`Updated playerActions to ${e.target.value}`); // For debugging
  };

  /* This function takes the selected genre from the genre.map as an argument and compares it against an array of objects that each has a genre
   as a key:value pair. when it matches the genre to the SystemContent.genre it passes the content key:value pair to the 
   content useState() and it passes the SystemContent.genre to the currentGenre useState()*/
  const handleChooseGenre = (genre: string) => {
    SystemContent.forEach((item) => {
      if (item.genre === genre) {
        let jsonString = JSON.stringify(item, null, 2);
        console.log("This is the JSON: ", jsonString); // For debugging
        setContent(jsonString ?? ""); //coalescing operator (??) to default to an empty string if item.content is undefined
        console.log("This is the CONTENT: ", item); // For debugging
        setCurrentGenre(item.genre);
      } else {
        console.log("No Genre Found.");
      }
    });
  };

  const clearState = () => setPlayerActions("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetchChatGpt();
      clearState();
    } catch (error) {
      console.error("Error occurred during fetchChatGpt:", error);
    }
  };

  /*checkGenreBackground takes one perameter and checks if our Background object has a key:value pair that matches the string passed.
  If if does then it saves it as a variable and if background is true then return the background.imageURL else return null*/
  const checkGenreBackground = (genre: string) => {
    const background = Backgrounds.find((bg) => bg.genre === genre);
    return background ? background.imageUrl : null;
  };

  /*backgroundImageUrl holds the return value from the checkGenreBackground function which is taking our currentGenre
  as a argument.  */
  const backgroundImageUrl = checkGenreBackground(currentGenre);

  const styles = {
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'url("/images/Lake.png")',
    backgroundSize: "cover",
    transition: "background-image 3s ease-in-out",
  };

  return (
    <div style={styles}>
      <nav className="w-full backdrop-blur-md p-4 flex justify-between items-center h-[50px]"><Link href="/admin">Admin Page</Link></nav>
      <div id="homePAGE" className="h-screen w-full  text-gray-200 flex flex-col justify-center items-center">
        <div
          id="promptSECTION"
          className="h-1/3 w-2/3 bg-gray-800 border-4 border-gray-500 flex flex-col justify-center items-center rounded-3xl"
        >
          <div id="prompt" className="m-5">
            {response ? <h1>{response}</h1> : <h1>Hello! Please select your adventure</h1>}
          </div>
        </div>
        <div
          id="selectionSECTION"
          className={`h-1/4 w-2/3 mt-5 mb-5 border-4 border-gray-500 flex flex-row flex-wrap justify-between rounded-3xl backdrop-blur-md ${
            !content ? "" : "invisible"
          }`}
        >
          {genres.map((genre, index) => (
            <GenreButton key={index} genre={genre} chooseGenre={handleChooseGenre} />
          ))}
        </div>
        <div
          id="inputeSECTION"
          className="h-1/4 w-2/3 bg-gray-800 border-4 border-gray-500 flex flex-col justify-center items-center rounded-3xl"
        >
          <div
            id="inputCONTAINER"
            className="
        w-full h-full"
          >
            <form
              name="sentMessage"
              onSubmit={handleSubmit}
              className=" w-full h-full flex flex-col justify-center items-center"
            >
              <div
                id="playerINPUT"
                className="
            w-full h-full"
              >
                <div className="flex flex-col w-full h-full">
                  <label htmlFor="message" className="ml-3 mt-3 mb-3">
                    Your Actions
                  </label>
                  <textarea
                    name="playerActions"
                    id="playerActions"
                    className="form-control border w-full h-full border-black bg-gray-700 focus:border-blue-200 focus:border-thin"
                    placeholder=""
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="mt-3 px-4 py-2 bg-white border border-black text-black hover:bg-black hover:text-white transition duration-500 ease-in-out"
              >
                Send
              </button>
            </form>
            <ActionButtons />
            <button className="mt-3 px-4 py-2 bg-black border border-white text-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
              Backpack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
