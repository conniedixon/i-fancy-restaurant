import React from "react";
import ArgentinianImg from "../assets/Argentinian.png";
import AsianImg from "../assets/Asian.png";
import BaltiImg from "../assets/Balti.png";
import BarImg from "../assets/Bar.png";
import BritishImg from "../assets/British.png";
import CafeImg from "../assets/Cafe.png";
import IndianImg from "../assets/Indian.png";
import InternationalImg from "../assets/International.png";
import PakistaniImg from "../assets/Pakistani.png";
import PubImg from "../assets/Pub.png";
import SteakhouseImg from "../assets/Steakhouse.png";

const AnimatedImages = () => {
  return (
    <div>
      <img
        src={ArgentinianImg}
        alt='Argentinian'
        className='homescreen-image animate-1'></img>
      <img
        src={AsianImg}
        alt='Asian'
        className='homescreen-image animate-2'></img>
      <img
        src={BaltiImg}
        alt='Balti'
        className='homescreen-image animate-3'></img>
      <img src={BarImg} alt='Bar' className='homescreen-image animate-4'></img>
      <img
        src={BritishImg}
        alt='British'
        className='homescreen-image animate-5'></img>
      <img
        src={CafeImg}
        alt='Cafe'
        className='homescreen-image animate-6'></img>
      <img
        src={IndianImg}
        alt='Indian'
        className='homescreen-image animate-7'></img>
      <img
        src={InternationalImg}
        alt='International'
        className='homescreen-image animate-8'></img>
      <img
        src={PakistaniImg}
        alt='Pakistani'
        className='homescreen-image animate-9'></img>
      <img src={PubImg} alt='Pub' className='homescreen-image animate-10'></img>
      <img
        src={SteakhouseImg}
        alt='Steakhouse'
        className='homescreen-image animate-11'></img>
    </div>
  );
};

export default AnimatedImages;
