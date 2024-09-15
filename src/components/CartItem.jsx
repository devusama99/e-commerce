import product1 from "../assets/product-1.png";
import { Avatar, Button } from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeProductFromCart,
} from "../store/slices/cart";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="sm:p-3 rounded-2xl flex items-center justify-between"
      style={{ border: "1px solid #EDEDED" }}
    >
      <div className="flex items-center gap-3">
        <Avatar
          shape="square"
          size={80}
          src={product.img}
          className="bg-gray-100"
        />
        <div className="flex flex-col gap-0 sm:gap-1">
          <h6 className="text-sm sm:text-lg uppercase">{product.name}</h6>
          <p className="italic"> {product.type}</p>
          <h6 className="text-sm sm:text-lg sm:hidden">
            ${product.price.substring(1) * product.qty}
          </h6>
        </div>
      </div>
      <div className="flex items-center py-5 sm:gap-3 md:gap-6">
        <div className="flex items-center gap-3">
          <p>{product.qty}</p>
          <span className="flex flex-col">
            <CaretUpOutlined
              className="text-sm hover:opacity-50 cursor-pointer"
              onClick={() => dispatch(increaseQty(product.id))}
            />
            <CaretDownOutlined
              className={`text-sm hover:opacity-50 cursor-pointer ${
                product.qty === 1 ? " opacity-50" : ""
              }`}
              onClick={() =>
                product.qty > 1 && dispatch(decreaseQty(product.id))
              }
            />
          </span>
        </div>
        <h6 className="text-sm hidden sm:block">
          ${product.price.substring(1) * product.qty}
        </h6>
        <Button
          shape="circle"
          className="p-2"
          type="icon"
          icon={<DeleteOutlined />}
          onClick={() => dispatch(removeProductFromCart(product.id))}
        />
      </div>
    </div>
  );
};

export default CartItem;
