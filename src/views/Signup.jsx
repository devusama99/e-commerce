import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../store/slices/signup";

const Signup = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupSubmit = (values) => {
    dispatch(
      signUp({
        email: values.email,
        fullname: values.name,
        password: values.password,
      })
    );
    navigate("/");
  };

  return (
    <Form
      name="signup"
      form={form}
      className=" flex flex-col justify-center items-center h-full"
      onFinish={signupSubmit}
    >
      <div className="p-3 flex flex-col justify-center items-center h-full gap-3 w-full">
        <h1 className="text-[#343434] text-2xl font-semibold">Register</h1>
        <div className="flex flex-col  w-full">
          <Form.Item
            hasFeedback
            name="name"
            validateDebounce={1000}
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Full name must only contain letters and spaces!",
              },
              {
                min: 2,
                message: "Full name must be at least 2 characters long!",
              },
              {
                max: 50,
                message: "Full name must be less than 50 characters long!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Name"
              prefix={<UserOutlined className="mr-1 text-[#828282]" />}
            />
          </Form.Item>
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
              {
                min: 8,
                message: "Password must be at least 8 characters long!",
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must contain at least one letter and one number!",
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
          <Form.Item
            hasFeedback
            name="confirmPassword"
            validateDebounce={1000}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Confirm Password"
              type="password"
              prefix={<LockOutlined className="mr-1 text-[#828282]" />}
            />
          </Form.Item>
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
            Create Account
          </Button>
        </ConfigProvider>
        <p className="text-[#828282]">Already have an account?</p>
        <Link className="w-full" to={"/"}>
          <Button block shape="round">
            Login
          </Button>
        </Link>
      </div>
    </Form>
  );
};

export default Signup;
