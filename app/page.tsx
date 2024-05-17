"use client";
// import openai from "@/utils/openai";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import GenreButton from "./components/genres/GenreButton";

// const playerInput = {
//   playerActions: "",
// };

export default function Home() {
  const [response, setResponse] = useState<string>("");
  const fetchChatGpt = async () => {
    try {
      const res = await axios.post("/api/openai", playerActions, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse(res.data.message.content);
      console.log(res.data.message.content);
    } catch (error) {
      console.error("There was a problem fetching from openai:", error);
    }
  };

  // const formRef = useRef();
  // const [{ playerActions }, setState] = useState(playerInput);

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  //   console.log(`Updated ${name} to ${value}`); // For debugging
  // };
  // const clearState = () => setState({ ...playerInput });

  const [playerActions, setPlayerActions] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlayerActions(e.target.value);
    console.log(`Updated playerActions to ${e.target.value}`); // For debugging
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
  const genres = ['Sci-fi', 'Horror', 'Fantasy', 'Noir'];
  return (
    <div id="homePAGE" className="h-screen w-full  text-gray-200 flex flex-col justify-center items-center">
      <div
        id="promptSECTION"
        className="h-1/3 w-2/3 bg-gray-800 border-4 border-gray-500 flex flex-col justify-center items-center"
      >
        <div id="prompt" className="">
          {response ? <h1>{response}</h1> : <h1>Hello! Please select your adventure</h1>}
        </div>
      </div>

      <div
      id="selectionSECTION"
      className="h-1/4 w-2/3 mt-5 mb-5 border-4 border-gray-500 flex flex-row flex-wrap justify-between"
    >
      {genres.map((genre, index) => (
        <GenreButton key={index} genre={genre} />
      ))}
    </div>
  );
      <div
        id="inputeSECTION"
        className="
      h-1/4 w-2/3 bg-gray-800 border-4 border-gray-500 flex flex-col justify-center items-center"
      >
        <div
          id="inputCONTAINER"
          className="
        w-full h-full"
        >
          <form name="sentMessage" onSubmit={handleSubmit} className=" w-full h-full flex flex-col justify-center items-center">
            <div
              id="playerINPUT"
              className="
            w-full h-full"
            >
              <div className="flex flex-col w-full h-full">
                <label htmlFor="message">Your Actions</label>
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
        </div>
      </div>
    </div>
  );
}
