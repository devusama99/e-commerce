import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Alert, Button, ConfigProvider, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../store/slices/signin";
import { useEffect } from "react";

const Signin = () => {
  const [form] = Form.useForm();
  const alertShow = useSelector((state) => state.signinReducer.alertShow);
  const alertMessage = useSelector((state) => state.signinReducer.alert);
  const dispatach = useDispatch();
  const navigate = useNavigate();

  const signinSubmit = (values) => {
    dispatach(signIn({ email: values.email, password: values.password }));
  };

  useEffect(() => {
    if (alertMessage.code === 200) navigate("/app/dashboard");
  }, [alertMessage.code]);

  return (
    <Form
      name="signin"
      form={form}
      className=" flex flex-col justify-center items-center h-full"
      onFinish={signinSubmit}
    >
      <div className="p-3 flex flex-col justify-center items-center h-full w-full gap-3">
        <h1 className="text-[#343434] text-2xl font-semibold">Welcome</h1>

        <div className="flex flex-col  w-full">
          <Form.Item
            hasFeedback
            name="email"
            validateDebounce={1000}
            rules={[
              {
                required: true,
                message: "Please input your email address!",
              },
              {
                type: "email",
                message: "The input is not a valid email address!",
              },

              {
                max: 100,
                message: "Email address must be less than 100 characters long!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Email"
              type="email"
              prefix={<MailOutlined className="mr-1 text-[#828282]" />}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="password"
            validateDebounce={1000}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              type="password"
              prefix={<LockOutlined className="mr-1 text-[#828282]" />}
            />
          </Form.Item>
          <div className="flex justify-end">
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultColor: "#89089F",
                    defaultHoverColor: "#89089F",
                  },
                },
              }}
            >
              <Button type="link" className="text-[#6F74DD] p-0">
                Forgot Password?
              </Button>
            </ConfigProvider>
          </div>
        </div>

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
            type="primary"
            block
            shape="round"
            className="mt-3"
            htmlType="submit"
          >
            Login
          </Button>
        </ConfigProvider>

        {alertShow ? (
          <Alert
            className="w-full"
            message={alertMessage.message}
            type={alertMessage.code === 200 ? "success" : "error"}
          />
        ) : (
          ""
        )}
        <p className="text-[#828282]">Have no account yet?</p>
        <Link className="w-full" to={"/signup"}>
          <Button block shape="round" className="no-underline">
            Registration
          </Button>
        </Link>
      </div>
    </Form>
  );
};

export default Signin;
