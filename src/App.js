import React from "react";
import {
  MdArchitecture,
  MdArrowForwardIos,
  MdArrowRight,
  MdChevronRight,
} from "react-icons/md";

import Header from "./components/ui/Header";
import Card from "./components/utility/Card";
import Tag from "./components/utility/Tag";

function App() {
  return (
    <div className="font-roboto min-h-screen flex flex-col bg-youtube-900">
      <Header className="" />
      <main className=" bg-youtube-900 text-white">
        <div className="grid grid-cols-1 justify-center justify-items-center mt-5 gap-8">
          {[
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
          ].map((i) => {
            return <Card />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
