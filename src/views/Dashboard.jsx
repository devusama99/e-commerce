import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, ConfigProvider } from "antd";
import heroShoe from "../assets/hero-shoe.png";
import heroSecondary from "../assets/hero-secondary.png";

import Product from "../components/Product";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const cartItems = useSelector((state) => state.cartReducer.cart);

  return (
    <>
      <div className="flex justify-end">
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBg: "#fff",
                defaultBorderColor: "#fff",
                defaultHoverBorderColor: "#fff",
                defaultActiveBorderColor: "#fff",
                onlyIconSize: "22px",
                defaultShadow: "none",
                defaultColor: "#09090A",
                defaultHoverColor: "#09090A",
              },
            },
          }}
        >
          <Link to={"/app/cart"}>
            <Button
              shape="round"
              icon={<ShoppingCartOutlined className="text-xl" />}
            >
              My Cart
              {cartItems.length ? <Badge count={cartItems.length} /> : <></>}
            </Button>
          </Link>
        </ConfigProvider>
      </div>
      <div className="grid grid-cols-12 xl:grid-cols-5 gap-4 mt-5">
        <div className="bg-[#111111] col-span-12 md:col-span-8 xl:col-span-3  rounded-2xl hero-bg min-h-[320px]">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className=" col-span-12 md:col-span-6 relative h-full flex items-center justify-center pt-10 md:pt-0">
              <img src={heroShoe} alt="" className="w-full max-w-[316px] z-2" />
              <div className="bg-primary w-full md:h-full h-[80px]  md:w-[80px] lg:w-[138px] xl:w-[178px] absolute left-[50%] translate-x-[-50%] z-1" />
            </div>
            <div className="p-10 col-span-12 md:col-span-6 text-white flex flex-col gap-4 justify-center items-start">
              <h1 className=" text-4xl max-w-[235px] font-bold m-0">
                ESSENTIAL ITEMS FOR
              </h1>
              <div className="inline-block bg-primary  rounded-2xl px-4 py-2 ">
                <h2 className="text-2xl m-0 m-0">$99</h2>
              </div>
              <p>
                Nulla accumsan malesuada egestas nam dignissim. Quis vulputate
                blandit duis
              </p>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultBg: "#fff",
                      defaultBorderColor: "#fff",
                      defaultHoverBorderColor: "#fff",
                      defaultActiveBorderColor: "#fff",
                      onlyIconSize: "22px",
                      defaultShadow: "none",
                      defaultColor: "#09090A",
                      defaultHoverColor: "#09090A",
                    },
                  },
                }}
              >
                <Button
                  className="uppercase font-bold  p-2 px-3"
                  style={{ fontSize: "10px" }}
                >
                  Add to Cart
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div className="bg-[#E4E4E4] col-span-12  md:col-span-4 xl:col-span-2  p-5 px-2 hero-secondary-bg rounded-2xl min-h-[320px]">
          <div className=" col-span-12 sm:col-span-6 md:cols-span-4 lg:col-span-3  p-3 relative h-full">
            <img
              src={heroSecondary}
              alt="hero-secondary-image"
              className="w-[180px]  absolute bottom-[0px] left-[0px]"
            />
            <div className=" flex items-end justify-end h-full w-full ">
              <div className=" text-2xl">
                <div className="flex items-center bg-rectangle relative">
                  <h2 className="text-8xl">50</h2>
                  <div>
                    <h2>%</h2> <h2>OFF</h2>
                  </div>
                </div>
                <hr className="border-2 border-black mx-3" />
                <div className="flex items-center bg-rectangle-bottom relative">
                  <h2 className="text-3xl ms-2">Running Kit</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {products.map((product) => (
          <div
            className="col-span-12 sm:col-span-6 md:cols-span-4 lg:col-span-3 xl:col-span-1"
            key={product.id}
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
