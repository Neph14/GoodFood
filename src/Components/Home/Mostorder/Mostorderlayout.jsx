import React from "react";

import bowl from "../../../Assets/Group 299.png";
import bowl1 from "../../../Assets/Group 299 (1).png";
import bowl2 from "../../../Assets/Group 299 (2).png";
import bowl3 from "../../../Assets/Group 299 (3).png";

function Mostorderlayout() {
  return (
    <>
      <div className="w-full h-full place-content-start p-10 bg-white">
        <p>Most Ordered Food</p>
        <p className="mt-2">Adipiscing elit, sed do eiusmod tempor</p>
        <div className="flex flex-col w-full h-72 mt-12">
          <div className="flex w-full h-11 justify-between items-center">
            <img
              src={bowl}
              alt="Fresh Salad Bowl"
              className="object-contain object-center w-1/5 h-auto mt-5"
            />
            <p className="text-[#273240] text-xs w-2/5 h-auto">
              Fresh Salad Bowl
            </p>
            <p className="text-[#273240] text-xs w-2/5 h-auto">IDR 45.000</p>
          </div>
          <div className="flex w-full h-11 justify-between items-center">
            <img
              src={bowl1}
              alt="Fresh Salad Bowl"
              className="object-contain object-center w-1/5 h-auto mt-5"
            />
            <p className="text-[#273240] text-xs w-2/5 h-auto">
              Chicken Noodles
            </p>
            <p className="text-[#273240] text-xs w-2/5 h-auto">IDR 75.000</p>
          </div>
          <div className="flex w-full h-11  justify-between items-center">
            <img
              src={bowl2}
              alt="Fresh Salad Bowl"
              className="object-contain object-center w-1/5 h-auto mt-5"
            />
            <p className="text-[#273240] text-xs w-2/5 h-auto">
              Smoothie Fruits
            </p>
            <p className="text-[#273240] text-xs w-2/5 h-auto">IDR 45.000</p>
          </div>
          <div className="flex w-full h-11  justify-between items-center">
            <img
              src={bowl3}
              alt="Fresh Salad Bowl"
              className="object-contain object-center w-1/5 h-auto mt-5"
            />
            <p className="text-[#273240] text-xs w-2/5 h-auto">
              Hot Chicken Wings
            </p>
            <p className="text-[#273240] text-xs w-2/5 h-auto">IDR 45.000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mostorderlayout;
