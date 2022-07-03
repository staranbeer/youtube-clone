import React from "react";
import faker from "@faker-js/faker";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { motion } from "framer-motion";

function Card() {
  return (
    <motion.div className="card max-w-xs">
      <div className="h-0 pb-[56%] pt-full relative card__thumbnail ">
        <img
          src={faker.image.avatar()}
          alt=""
          className="absolute w-full h-full inset-0 object-cover"
        />
      </div>
      <div className="card__about flex items-start gap-4 mt-3">
        <div className="card__avatar h-9 w-9 mt-1 shrink-0">
          <img src={faker.image.avatar()} alt="" className=" rounded-full " />
        </div>
        <div className="card__desc">
          <p className="line-clamp-2 ">{faker.hacker.phrase()}</p>
          <div className="text-xs mt-1.5 text-slate-400">
            <p className="card__user">{faker.name.findName()}</p>
            <div className="card__stats">
              <span className="inline-block mt-0.5">{12} views : </span>
              <span>{1} Days ago</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
