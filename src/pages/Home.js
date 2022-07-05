import React from "react";
import { useState } from "react";
import Tags from "../components/ui/Tags";
import Card from "../components/utility/Card";

function Home({ isSidebarOpen }) {
  return (
    <div className="flex ">
      {isSidebarOpen && (
        <aside className="sidebar basis-60 bg-youtube-800"></aside>
      )}
      <div className="flex-1 ">
        <div
          className="main grid grid-cols-1  justify-center justify-items-center  gap-8 youtubeSm:grid-cols-2 youtubeMd:grid-cols-3
    youtubeLg:grid-cols-4 m-6"
        >
          {[
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
          ].map((i, index) => {
            return <Card key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
