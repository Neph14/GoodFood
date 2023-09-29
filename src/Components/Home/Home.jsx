import React from "react";
import { styled } from "styled-components";
import Revenuelayout from "./Revenue/Revenuelayout";
import Orderlayout from "./Order/Orderlayout";
import Ordertimelayout from "./Ordertime/Ordertimelayout";
import Mostorderlayout from "./Mostorder/Mostorderlayout";
import Rating from "./Rating/Layout";

function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-5 lg:grid-rows-2 w-full h-full bg-white place-items-center lg:place-items-stretch pl-0 lg:pl-5 pt-0 lg:pt-1 gap-0 lg:gap-1">
        <div className="col-span-1 lg:col-span-2">
          <Revenuelayout />
        </div>
        <div>
          <Ordertimelayout />
        </div>
        <div>
          <Rating />
        </div>
        <div>
          <Mostorderlayout />
        </div>
        <div>
          <Orderlayout />
        </div>
      </div>
    </>
  );
}

export default Home;
