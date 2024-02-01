import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="24 Desember, 2023"
            subTitle="Pantai Coconut Beach"
            category="Travel"
          />
          <BlogCard
            image={blogImgTwo}
            title="24 Desember, 2023"
            subTitle="Atmosfer Stadion segiri"
            category="Sport"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="25 Desember, 2023"
            subTitle="Pantai Coconut Beach"
            category="Travel"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
