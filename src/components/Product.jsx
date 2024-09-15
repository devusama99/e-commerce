import { HeartFilled } from "@ant-design/icons";
import { Button, ConfigProvider, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/slices/cart";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cart);

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  const alreadtAdded = () => {
    return !cartItems.filter((cartProduct) => product.id === cartProduct.id)
      .length;
  };

  return (
    <div className="bg-white rounded-2xl">
      <div className="h-[230px] px-5 py-2 flex items-center justify-center">
        <img src={product.img} alt="shoe" className="w-[200px]" />
      </div>
      <div className="flex  w-full">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#000",
            },
            components: {
              Button: {
                primaryShadow: "none",
              },
            },
          }}
        >
          <Button
            className=" uppercase font-bold  flex-1 px-0"
            style={{ borderRadius: 0, fontSize: "10px" }}
            type="primary"
            onClick={() => alreadtAdded() && addToCart()}
          >
            {alreadtAdded() ? "Add to cart" : "Added"}
          </Button>
        </ConfigProvider>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#89089F",
            },
            components: {
              Button: {
                primaryShadow: "none",
              },
            },
          }}
        >
          <Button
            className=" uppercase font-bold  flex-1 px-0"
            style={{ borderRadius: 0, fontSize: "10px" }}
            type="primary"
          >
            Quick View
          </Button>
        </ConfigProvider>
      </div>
      <div className="p-3 px-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold  uppercase">{product.name}</h4>
          <div className="flex items-center">
            <Button
              shape="circle"
              type="text"
              icon={<HeartFilled className="text-primary" />}
              className="p-2"
            ></Button>
            <p className="font-bold">{product.price}</p>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <p className="italic">{product.type}</p>
          <Rate
            disabled
            value={product.rating}
            className="text-black text-sm"
          ></Rate>
        </div>
      </div>
    </div>
  );
};

export default Product;
