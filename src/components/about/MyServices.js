import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="bekerja di belakang layar untuk membuat website yang menarik dan berfungsi dengan baik"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="membuat desain sebuah website."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile App developer"
        subTitle="membuat dan mengembangkan aplikasi yang sesuai dengan kebutuhan di perangkat mobile."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="mengoptimasi mesin pencari untuk meningkatkan traffic website"
      />
    </div>
  );
};

export default MyServices;
