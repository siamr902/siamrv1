import React from "react";

export const ThemeCircles = () => {
  return (
    <>
      <div className="blur-circle dark:bg-skypurple bg-darkpurple absolute top-[20%] left-[70%]"></div>
      <div className="blur-circle dark:bg-skyblue bg-darkred absolute top-[20%] left-[40%]"></div>
    </>
  );
};

export const LeftSideCircles = () => {
  return (
    <>
      <div className="blur-circle bg-red-800 dark:bg-red-500 absolute left-0 top-[20%]"></div>
      <div className="blur-circle bg-blue-800 dark:bg-blue-500 absolute left-0 top-1/2"></div>
    </>
  );
};

export const TechCircles = () => {
  return (
    <>
      <div className="blur-circle bg-green-500 absolute top-1/2 left-1/2"></div>
      <div className="blur-circle bg-gray-400 absolute top-1/2 left-[10%]"></div>
    </>
  );
};

export const ProjectCircles = () => {
  return (
    <>
      <div className="blur-circle bg-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2"></div>
    </>
  );
};

export const ContactCircles = () => {
  return (
    <>
      <div className="blur-circle bg-gray-600 absolute top-1/2 left-[10%]"></div>
      <div className="blur-circle bg-purple-500 absolute top-[5%] left-[5%]"></div>
    </>
  );
};

export const FooterCircles = () => {
  return (
    <>
      <div className="blur-circle absolute dark:bg-gray-700 bg-gray-300 right-[10%] top-0 z-10"></div>
      <div className="blur-circle absolute dark:bg-gray-700 bg-gray-300 left-[5%] top-0 z-10"></div>
    </>
  );
};

export default ThemeCircles;
