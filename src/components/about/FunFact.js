import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<IoLogoYoutube />} des="5 subscriber"/>
      <FunFactCard icon={<SiAntdesign />} des="2 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="2 hours of coding" />
      <FunFactCard icon={<IoLogoInstagram />} des="262 Followers" />
    </div>
  );
};

export default FunFact;
