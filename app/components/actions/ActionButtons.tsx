import React, { useEffect } from "react";

const ActionButtons: React.FC = () => {
  /* Is event.altKey true? Then check what key is pressed. In case 1-4 trigger something */
  const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
          console.log("You pressed 1");
          break;
        case "2":
          console.log("You pressed 2");
          break;
        case "3":
          console.log("You pressed 3");
          break;
        case "4":
          console.log("You pressed 4");
          break;
      }
  };
  /* This calls an event listener on the document and listens for a keydown event and also triggers the handleKeyPress function */
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    /* This cleanup function removes the event listener when the component unmounts. 
    This is important to avoid memory leaks and ensure that the event listener is 
    not active when the component is no longer in the DOM. */
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return null;
};

export default ActionButtons;
