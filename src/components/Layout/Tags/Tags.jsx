import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const tags = [...faker.lorem.words(10).split(" ")];
const Tags = () => {
  const [active, setActive] = useState("All");

  return (
    <div className=" bg-youtube-800 px-5 border-b border-youtube-600 py-3 gap-2 overflow-x-scroll scrollbar-none cursor-pointer flex top-[57px] fixed w-full youtubeSidebarMobile:left-[75px] z-[1]">
      <button
        className={`tag bg-youtube-600 border border-youtube-500 p-3 py-[3px] rounded-full inline-block  transition ${
          active === "All"
            ? "bg-white border-white text-youtube-900 "
            : "hover:bg-youtube-500"
        }`}
        onClick={() => {
          setActive("All");
        }}
      >
        All
      </button>
      {tags.map((word, index) => (
        <button
          key={index}
          className={`tag bg-youtube-600 border border-youtube-500 p-3 py-[3px] rounded-full inline-block  transition ${
            active === word
              ? "bg-white border-white text-youtube-900"
              : "hover:bg-youtube-500"
          }`}
          onClick={() => setActive(word)}
        >
          {word}
        </button>
      ))}
    </div>
  );
};

export default React.memo(Tags);
