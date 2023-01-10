import React from "react";
import { BlogCircles } from "../blurs/BlurCircles";
import Headline from "./Headline";
import Penguin from "./Penguin";

const Blog: React.FC = () => {
  return (
    <div className="w-full min-h-fit relative py-8 pl-6 pr-[4vw] mt-20 dark:bg-[#242424] bg-[#eeeeee] flex items-end justify-between overflow-hidden -skew-y-[3deg] transition ease-linear shadow-dimmer dark:shadow-[#1f1e1e] shadow-[#c6cacf]">
      <BlogCircles />
      <Headline />
      <Penguin />
    </div>
  );
};

export default Blog;
