import AuthImage from "../assets/auth-screen-image.png";
import { Outlet } from "react-router-dom";
const Authentication = () => {
  return (
    <div className="min-h-screen w-screen  flex items-center justify-center p-4 ">
      <div className="grid grid-cols-12 min-h-[743px] bg-white w-full max-w-[1218px] rounded-2xl overflow-hidden dotted-bg bg-[#444444] ">
        <div className="order-2 sm:order-1 col-span-12 sm:col-span-6 lg:col-span-7  bg-primary bg-opacity-70 h-full flex flex-col items-center justify-center p-4 py-8 text-white ">
          <img
            src={AuthImage}
            alt="auth-image"
            className="mt-8 w-full max-w-[367px]"
          />
          <h1 className=" font-semibold text-2xl text-center text-white m-0 mt-4">
            Welcome to our shop.
          </h1>
          <h6 className="text-sm m-0 font-normal">Purchase imported shoes</h6>
        </div>

        <div className="order-1 sm:order-2 col-span-12 sm:col-span-6 lg:col-span-5 bg-red-400 h-full bg-white p-4  px-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
