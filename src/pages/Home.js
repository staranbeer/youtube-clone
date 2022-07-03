import React from "react";
import Card from "../components/utility/Card";

function Home() {
  return (
    <div
      className="grid grid-cols-1 justify-center justify-items-center  gap-8 youtubeSm:grid-cols-2 youtubeMd:grid-cols-3
    youtubeLg:grid-cols-4"
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
  );
}

export default Home;
