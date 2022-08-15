import React from "react";
import { faker } from "@faker-js/faker";

const Tags = () => {
  return (
    <div className=" bg-youtube-800 px-5 border-b border-youtube-600 py-3 gap-2 overflow-x-scroll scrollbar-none cursor-pointer flex">
      {faker.lorem
        .words(10)
        .split(" ")
        .map((word, index) => (
          <button className="tag bg-youtube-600 border border-youtube-500 p-3 py-[3px] rounded-full inline-block hover:bg-youtube-500 transition">
            {word}
          </button>
        ))}
    </div>
  );
};

export default Tags;
