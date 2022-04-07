import React from "react";
import Card from "../components/utility/Card";

function Home() {
  return (
    <div className="grid grid-cols-1 justify-center justify-items-center  gap-8 ">
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
  );
}

export default Home;
