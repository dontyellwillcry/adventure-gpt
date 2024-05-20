import React, { useEffect } from "react";

const ActionButtons: React.FC = () => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.altKey && event.key === "1") {
      console.log("Alt + 1 pressed");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return null;
};

export default ActionButtons;
