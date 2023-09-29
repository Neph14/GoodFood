import React from "react";

import { Link } from "react-router-dom";

function Notfound() {
  return (
    <>
      <div className="w-screen h-screen bg-white flex flex-col items-center">
        <div className="w-11/12 lg:w-5/6 h-full">
          <div className="w-full h-full flex flex-col items-center justify-center gap-5">
            <p className="text-8xl font-medium">404 Not Found</p>
            <p className="py-5">
              Your visited page not found or not builded yet. You may go home
              page.
            </p>
            <Link to="/">
              <button className="bg-[#707FDD] text-white font-medium text-sm w-56 h-11">
                Back To Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notfound;
