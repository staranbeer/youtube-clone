import { MdExplore, MdHome } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Tags from "./components/Layout/Tags/Tags";
import History from "./components/pages/History";
import Homepage from "./components/pages/Homepage";
import LikedVideos from "./components/pages/LikedVideos";

function App() {
  return (
    <div className="font-roboto text-gray-300 min-h-screen bg-youtube-900 ">
      <Header />
      <div className="flex">
        <nav className="youtubeSidebarMobile:block hidden mt-[57px] h-screen max-w-[75px]  bg-youtube-800 before:w-[76px] before:h-3 relative before:-top-1 before:bg-youtube-800 before:absolute  before:z-10">
          <Link
            to={"/"}
            className="flex flex-col items-center hover:bg-youtube-600  p-6 py-3 mt-1"
          >
            <MdHome size="26" />
            <div className="text-[10px] mt-2">Home</div>
          </Link>
          <Link
            to={"/explore"}
            className="flex flex-col items-center hover:bg-youtube-600   p-6 py-3"
          >
            <MdExplore size="26" />

            <div className="text-[10px] mt-2">Explore</div>
          </Link>
        </nav>
        <div className="w-full">
          <Tags />
          <div className="  pt-[115px]">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/liked" element={<LikedVideos />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
