import React from "react";
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
    </div>
  );
}

export default Tags;
