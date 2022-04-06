import React from "react";
import faker from "@faker-js/faker";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { motion } from "framer-motion";

function Card() {
  return (
    <motion.div className="card max-w-xs">
      <div className="card__thumbnail">
        <img
          src={faker.image.avatar()}
          alt=""
          className="h-44 w-80 object-cover"
        />
      </div>
      <div className="card__about flex items-start gap-4 mt-3">
        <div className="card__avatar h-9 w-9 mt-1 shrink-0">
          <img src={faker.image.avatar()} alt="" className=" rounded-full " />
        </div>
        <div className="card__desc">
          <p className="line-clamp-2 ">{faker.hacker.phrase()}</p>
          <div className="text-xs mt-1.5 space-y-1 text-slate-400">
            <p className="card__user">{faker.name.findName()}</p>
            <div className="card__stats">
              <span className="">{} views : </span>
              <span>{} Days ago</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
