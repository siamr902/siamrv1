import React from "react";
import { BlogCircles } from "../blurs/BlurCircles";
import Headline from "./Headline";
import Penguin from "./Penguin";

const Blog: React.FC = () => {
  return (
    <div className="w-full min-h-[50vh] relative sm:min-h-[60vh] p-6 mt-20 dark:bg-[#242424] bg-[#eeeeee] overflow-hidden -skew-y-[3deg] transition ease-linear shadow-dimmer dark:shadow-[#1f1e1e] shadow-[#c6cacf] flex flex-col space-y-2">
      <BlogCircles />
      <Headline />
      <Penguin />
    </div>
  );
};

export default Blog;
