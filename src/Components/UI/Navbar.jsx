import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../UI/Features/useSlice";
import { Select } from "antd";
import burger from "../../Assets/Emoticon.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const dispatch = useDispatch();
  const toggle = () => [
    dispatch(toggleSideBar()),
    setIsSidebarOpen(!isSidebarOpen),
  ];

  const navbarClass = isSidebarOpen
    ? "border border-b-2 border-[#C8CBD9] w-screen lg:w-full"
    : "border border-b-2 border-[#C8CBD9] w-screen lg:w-screen";
  return (
    <div
      className={`bg-white z-20 sticky top-0 transition-all duration-300 lg:${navbarClass}`}
    >
      <div className="text-white flex md:w-[95%]  w-[100%] bg-white pr-7 lg:pr-0 h-[62px] items-center  justify-between fixed top-0 sm:static  ">
        <div className="flex items-center gap-5  w-[70%]">
          <button className="md:pl-10 pl-4 ">
            <span className="text-[#5A67BA] text-4xl" onClick={toggle}>
              <ion-icon name="menu-sharp"></ion-icon>
            </span>
          </button>
          <div className="md:w-[80%] w-[50%]">
            <input
              type="text"
              className="bg-[#F6F6FB] w-full  py-1 px-4 rounded-md"
              placeholder={`Search ${(
                <ion-icon name="search-outline"></ion-icon>
              )}`}
            />
          </div>
        </div>
        <div className="w-[30%] flex justify-end">
          <img
            src={burger}
            alt="Delicious Burger"
            className="w-[13px] h-4 bg-[#FFE6CC] p-4 rounded-full"
          />
          <Select
            defaultValue="Delicious Burger"
            style={{
              width: 150,
            }}
            bordered={false}
            options={[
              {
                value: "Delicious Burger ",
                label: "Delicious Burger ",
              },
              {
                value: "burger enak",
                label: "burger enak",
              },
              {
                value: "burger enak",
                label: "burger enak",
              },
            ]}
          />
          <div className="w-8 h-8 rounded-full text-[#B0C3CC] text-center pt-2">
            <ion-icon name="notifications"></ion-icon>
          </div>
        </div>
      </div>
      {/* <SideBarSmall /> */}
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toggleSideBar } from "../UI/Features/useSlice";
// import { Avatar, Badge, Space } from "antd";
// import { Select } from "antd";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set default ke true jika ingin Navbar full width

//   const toggleSidebar = () => {
//     dispatch(toggleSideBar());
//     setIsSidebarOpen(!isSidebarOpen); // Toggle nilai isSidebarOpen
//   };

//   // Menentukan kelas untuk Navbar sesuai dengan kondisi isSidebarOpen
//   const navbarClass = isSidebarOpen
//     ? "border-b-2 border-[#C8CBD9] w-[100%]"
//     : "border-b-2 border-[#C8CBD9] w-full";

//   return (
//     <div
//       className={`border-b-2 border-[#C8CBD9] bg-white z-20 sticky top-0 ${navbarClass}`}
//     >
//       <div className="text-white flex md:w-[95%]  w-[97%] bg-white  h-[62px] items-center  justify-between fixed top-0 sm:static  ">
//         <div className="flex items-center gap-5  w-[70%]">
//           <button className="md:pl-10 pl-4 ">
//             <span className="text-[#5A67BA] text-4xl" onClick={toggleSideBar}>
//               <ion-icon name="menu-sharp"></ion-icon>
//             </span>
//           </button>
//           <div className="md:w-[80%] w-[50%]">
//             <input
//               type="text"
//               className="bg-[#F6F6FB] w-full  py-1 px-4 rounded-md"
//               placeholder="search"
//             />
//           </div>
//         </div>
//         <div className="w-[30%] flex justify-end">
//           {/* <img src={burger} alt="" /> */}
//           <Select
//             defaultValue="Delicious Burger "
//             style={{
//               width: 150,
//             }}
//             bordered={false}
//             options={[
//               {
//                 value: "Delicious Burger ",
//                 label: "Delicious Burger ",
//               },
//               {
//                 value: "burger enak",
//                 label: "burger enak",
//               },
//               {
//                 value: "burger enak",
//                 label: "burger enak",
//               },
//             ]}
//           />
//           <div>
//             <Badge count={7} showZero>
//               <Avatar shape="square" size="small" />
//             </Badge>
//           </div>
//         </div>
//       </div>
//       {/* <SideBarSmall /> */}
//     </div>
//   );
// };

// export default Navbar;
