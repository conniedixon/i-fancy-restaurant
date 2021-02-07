import React, { useEffect } from "react";
import TypeWriter from "./TypeWriter";
import AnimatedImages from "./AnimatedImages";

const Homepage = () => {
  return (
    <div className='container'>
      {/* <div className='grey-background'></div> */}
      <TypeWriter />
      <AnimatedImages />
    </div>
  );
};

export default Homepage;
