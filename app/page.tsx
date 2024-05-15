'use client';

import { useRef, useEffect, useState } from 'react';

import Image from 'next/image'



const playerInput = {
  playerActions: "",
};



export default function Home() {

  const formRef = useRef();
  const [{ playerActions }, setState] = useState(playerInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...playerInput });

  const handleSubmit = (e) => {
    e.preventDefault();


  };


  return (
    <div id='homePAGE' className='
    h-screen w-full bg-black text-white flex flex-col justify-center items-center'>



      <div id="promptSECTION" className="
      h-1/3 w-2/3 bg-gray-800 border-4 border-white flex flex-col justify-center items-center">

        <div id="prompt" className="">
          <h1>Hello</h1>
        </div>

      </div>



      <div id="selectionSECTION" className="
      h-1/4 w-2/3 mt-5 mb-5 border-4 border-white flex flex-col justify-center items-center">

        <div id="selectionOptions" className="">
          <div><h1>Selection Option 1</h1></div>
        </div>

      </div>



      <div id="inputeSECTION" className="
      h-1/4 w-2/3 bg-gray-800 border-4 border-white flex flex-col justify-center items-center">

        <div id='inputCONTAINER' className='
        w-full h-full'>

          <form
            ref={formRef}
            name="sentMessage"
            validate onSubmit={handleSubmit}
            className=' w-full h-full flex flex-col justify-center items-center'
          >

            <div id='playerINPUT' className='
            w-full h-full'>

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
              className="mt-3 px-4 py-2 bg-white border border-black text-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Send
            </button>

          </form>

        </div>

      </div>



    </div>

  );
}
