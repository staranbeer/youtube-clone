import React from "react";
import { MdChevronRight } from "react-icons/md";
import Tag from "../utility/Tag";

function Tags() {
  return (
    <div className="tags py-3 px-6 bg-youtube-800 border-b border-gray-700 flex items-center gap-4 overflow-x-scroll scrollbar-none scrollbar ">
      <Tag
        name="All"
        classNameProp={" bg-white text-gray-900 border-white hover:bg-white"}
      />

      {[
        { name: "JavaScript" },
        { name: "Manga" },
        { name: "Computer programming" },
        { name: "Music" },
        { name: "something" },
      ].map(({ name }) => {
        return <Tag name={name} key={name} />;
      })}
      <div className=" fixed right-0 bg-gradient-to-l from-youtube-800 via-youtube-800 p-3 pl-20 pr-6  ">
        <MdChevronRight size={24} className="text-white  cursor-pointer " />
      </div>
    </div>
  );
}

export default Tags;
