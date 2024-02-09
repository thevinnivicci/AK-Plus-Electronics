import { SearchCheckIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full p-2">
      <div className="flex items-center justify-center ">
        <input
          placeholder="Enter product name"
          className="border rounded-lg border-zinc-700 w-1/2 p-2"
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchBar;
