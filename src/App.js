import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/ui/Header";
import SidebarDesktop from "./components/ui/SidebarDesktop";
import SidebarMobile from "./components/ui/SidebarMobile";
import Tags from "./components/ui/Tags";
import History from "./pages/History";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

function App() {
  const [isMobileSidebarOpen, setisMobileSidebarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="font-roboto h-screen w-screen overflow-hidden flex flex-col bg-youtube-900 ">
      <Header
        toggleSidebar={setIsSidebarOpen}
        toggleMobileSidebar={setisMobileSidebarOpen}
      />
      <div className="flex overflow-hidden ">
        <SidebarMobile
          className="youtubeSidebarMobile:block hidden"
          isOpen={isMobileSidebarOpen}
          setIsOpen={setisMobileSidebarOpen}
        />
        <SidebarDesktop isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 l">
          <Tags />
          <main className=" bg-youtube-900 text-white  flex-1 overflow-y-scroll  scrollbar-thumb-gray-600 scrollbar-track-gray-900 scrollbar-thin  ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/history" element={<History />}></Route>
              <Route path="/watchlater" element={<WatchLater />}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
