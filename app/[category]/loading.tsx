import React from "react";

export default function loading() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-primary rounded-full"></div>
        <div className="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
}
