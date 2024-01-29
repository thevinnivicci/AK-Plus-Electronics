import React from "react";

export default function loading() {
  return (
    <div className="w-full h-screen">
      <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
