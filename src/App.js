import React from "react";
import {
  MdArchitecture,
  MdArrowForwardIos,
  MdArrowRight,
  MdChevronRight,
} from "react-icons/md";
import { Route, Routes } from "react-router-dom";

import Header from "./components/ui/Header";
import Card from "./components/utility/Card";
import Tag from "./components/utility/Tag";
import History from "./pages/History";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

function App() {
  return (
    <div className="font-roboto h-screen w-screen overflow-hidden flex flex-col bg-youtube-900 ">
      <Header className="" />
      <main className=" bg-youtube-900 text-white  flex-1 overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/watchlater" element={<WatchLater />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
