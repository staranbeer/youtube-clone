import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import History from "./components/pages/History";
import Homepage from "./components/pages/Homepage";
import LikedVideos from "./components/pages/LikedVideos";

function App() {
  return (
    <div className="font-roboto text-gray-300 min-h-screen bg-youtube-900">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
