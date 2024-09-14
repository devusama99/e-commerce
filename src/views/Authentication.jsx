import { Carousel } from "antd";
import AuthImage from "../assets/auth-screen-image.png";
const Authentication = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="h-screen w-screen bg-red-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-12 min-h-[743px] bg-white w-full max-w-[1218px] rounded-2xl overflow-hidden">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 bg-primary h-full flex flex-col items-center justify-center p-4 text-white ">
          <img src={AuthImage} alt="auth-image" />
          <h1 className="font-semibold text-2xl text-center text-white mt-4">
            Welcome to our shop.
          </h1>
          <h6 className="text-sm">Purchase imported shoes</h6>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-red-400 h-full"></div>
      </div>
    </div>
  );
};

export default Authentication;
