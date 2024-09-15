import { ArrowRightOutlined, LeftOutlined } from "@ant-design/icons";
import MasterCardLogo from "../assets/master-card-logo.png";
import VisaCardLogo from "../assets/visa-card-logo.png";
import RuPayLogo from "../assets/ru-pay-logo.png";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { Avatar, Button, ConfigProvider, Form, Input } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const [paymentType, setPaymentType] = useState("master");
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const checkout = () => {
    navigate("/app/success");
  };

  const isValidCreditCardNumber = (number) => {
    const sanitizedNumber = number.replace(/\D/g, "");
    if (sanitizedNumber.length < 13 || sanitizedNumber.length > 19) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedNumber.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const isValidExpirationDate = (month, year) => {
    // Convert year to four digits
    const fullYear = 2000 + year;

    // Create a date object for the first day of the expiration month
    const expirationDate = new Date(fullYear, month - 1);
    const currentDate = new Date();

    // Set the expiration date to the end of the month for comparison
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    expirationDate.setDate(0); // Last day of the month

    // Compare the expiration date with the current date
    return expirationDate >= currentDate;
  };

  const productsTotal = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric value from price string
      const price = parseFloat(item.price.replace(/[$,]/g, ""));

      // Calculate item total
      const itemTotal = price * item.qty;

      // Add to total
      return total + itemTotal;
    }, 0);
  };

  return (
    <Form
      className="flex flex-col gap-3"
      form={form}
      name="checkout"
      onFinish={checkout}
    >
      <div className="bg-white rounded-2xl w-full p-5 grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-7  xl:col-span-8 flex flex-col gap-5">
          <Link to="/app/dashboard" className="flex gap-2 text-black">
            <LeftOutlined />
            <p>Shopping Continue</p>
          </Link>
          <hr className=" border-grey" />
          <span>
            <h1 className="text-lg">Shopping Cart</h1>
            <p>You have 3 item in your cart</p>
          </span>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem product={item} key={item.id} />)
          ) : (
            <h4>No item in cart</h4>
          )}
        </div>
        <div className="bg-primary p-5 col-span-12 md:col-span-5 xl:col-span-4 xl:col-span-4 flex flex-col gap-5 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <h6 className="text-lg">Card Details</h6>
            <Avatar shape="square" size={50} src="https://i.pravatar.cc/300" />
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: "#BA68C8",
                colorBorder: "#BA68C8",
                colorTextPlaceholder: "#bbb",
                colorText: "#ffff",
              },
              components: {
                Input: {
                  paddingBlock: "8px",
                },
              },
            }}
          >
            <div className="flex flex-col gap-3">
              <div>
                <label>Card Type</label>
                <div className="flex gap-3">
                  <img
                    src={MasterCardLogo}
                    alt="master-card"
                    className="cursor-pointer hover:bg-gray-100 rounded-lg transition"
                    style={{
                      border: paymentType === "master" ? "1px solid #fff" : "",
                    }}
                    onClick={() => setPaymentType("master")}
                  />
                  <img
                    src={VisaCardLogo}
                    alt="master-card"
                    className="cursor-pointer hover:bg-gray-100 rounded-lg transition"
                    style={{
                      border: paymentType === "visa" ? "1px solid #fff" : "",
                    }}
                    onClick={() => setPaymentType("visa")}
                  />
                  <img
                    src={RuPayLogo}
                    alt="master-card"
                    className="cursor-pointer hover:bg-gray-100 rounded-lg transition"
                    style={{
                      border: paymentType === "ru" ? "1px solid #fff" : "",
                    }}
                    onClick={() => setPaymentType("ru")}
                  />
                </div>
              </div>
              <div>
                <label>Name on card</label>
                <Form.Item
                  name="name"
                  validateDebounce={1000}
                  rules={[
                    {
                      required: true,
                      message: "Please input your full name!",
                    },
                    {
                      pattern: /^[A-Za-z\s]+$/,
                      message:
                        "Full name must only contain letters and spaces!",
                    },
                    {
                      min: 2,
                      message: "Full name must be at least 2 characters long!",
                    },
                    {
                      max: 50,
                      message:
                        "Full name must be less than 50 characters long!",
                    },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
              </div>
              <div>
                <label>Card Number</label>
                <Form.Item
                  name="cardNumber"
                  validateDebounce={1000}
                  rules={[
                    {
                      required: true,
                      message: "Please input your credit card number!",
                    },
                    {
                      validator: (_, value) => {
                        if (!value) {
                          return Promise.resolve();
                        }
                        const sanitizedValue = value.replace(/\D/g, "");
                        if (!isValidCreditCardNumber(value)) {
                          return Promise.reject(
                            new Error("Invalid credit card number!")
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input placeholder="1111 2222 3333 4444" />
                </Form.Item>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label>Expiration Date</label>
                  <Form.Item
                    name="date"
                    validateDebounce={1000}
                    rules={[
                      {
                        pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
                        message: "Invalid date format. Use MM/YY.",
                      },
                      {
                        validator: (_, value) => {
                          if (!value) {
                            return Promise.reject(
                              new Error("Please input your expiration date!")
                            );
                          }

                          const [month, year] = value
                            .split("/")
                            .map((num) => parseInt(num, 10));

                          if (month < 1 || month > 12) {
                            return Promise.reject(
                              new Error("Month must be between 01 and 12.")
                            );
                          }
                          if (year < 0 || year > 99) {
                            return Promise.reject(
                              new Error("Year must be a two-digit number.")
                            );
                          }

                          if (!isValidExpirationDate(month, year)) {
                            return Promise.reject(
                              new Error(
                                "The expiration date must be in the future."
                              )
                            );
                          }

                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input placeholder="mm/yy" />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <label>CVV</label>
                  <Form.Item
                    name="cvv"
                    validateDebounce={1000}
                    rules={[
                      {
                        required: true,
                        message: "Please input your CVV!",
                      },
                      {
                        pattern: /^\d{3,4}$/,
                        message: "CVV must be 3 or 4 digits long.",
                      },
                    ]}
                  >
                    <Input placeholder="123" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </ConfigProvider>
          <hr className="opacity-30" />
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>${productsTotal()}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping</p>
              <p>${cartItems.length ? 4 : 0}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Total (Tax incl.)</p>
              <p>${productsTotal() + (cartItems.length ? 4 : 0)}</p>
            </div>
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#BA68C8",
              },
              components: {
                Button: {
                  primaryShadow: "none",
                },
              },
            }}
          >
            <Button
              type="primary"
              block
              className="py-5"
              htmlType="submit"
              disabled={!cartItems.length}
            >
              <div className="flex items-center justify-between  w-full">
                <p>${productsTotal() + (cartItems.length ? 4 : 0)}</p>
                <p>
                  Checkout <ArrowRightOutlined />
                </p>
              </div>
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </Form>
  );
};

export default Cart;
