import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="My DREAM" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Facebook Inc."
          des="Bisa menjadi Web Developer di Facebook."
        />
        <ResumeCard
          badge="Google"
          title="Front-end Developer"
          subTitle="Google Inc."
          des="Bisa menjadi Front-end Developer di Google ."
        />
        <ResumeCard
          badge="Microsoft"
          title="Senior Developer"
          subTitle="Microsoft Corporation"
          des="Bisa menjadi Senior Developer di Microsoft Corporation"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2013 - 2018"
          title="SDN 001 SAMARINDA SEBERANG"
          subTitle="SAMARINDA"
          des="SD SAYA DI SDN 001 SAMARINDA SEBERANG"
        />
        <ResumeCard
          badge="2019 - 2021"
          title="SMP 008 SAMARINDA SEBERANG"
          subTitle="SAMARINDA"
          des="SMP SAYA DI SMP 008 SAMARINDA SEBERANG"
        />
        <ResumeCard
          badge="2021-Present"
          title="SMK TI AIRLANGGA"
          subTitle="SAMARINDA"
          des="SMK TI AIRLANGGA"
        />
      </div>
    </div>
  );
};

export default Education;
