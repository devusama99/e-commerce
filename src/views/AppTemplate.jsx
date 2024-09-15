import React, { useState } from "react";
import {
  BarChartOutlined,
  BellOutlined,
  HomeOutlined,
  PieChartOutlined,
  InboxOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Avatar, Button, ConfigProvider, Drawer, Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Content, Sider, Header } = Layout;
const items = [
  { icon: HomeOutlined, name: "Dashboard" },
  { icon: BarChartOutlined, name: "Products" },
  { icon: BellOutlined, name: "Notifications" },
  { icon: PieChartOutlined, name: "Analytics" },
  { icon: InboxOutlined, name: "Inventory" },
].map((menuItem, index) => ({
  key: menuItem.name.toLowerCase(),
  icon: React.createElement(menuItem.icon),
  label: menuItem.name,
}));

const AppTemplate = () => {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  const routeTo = (path) => {
    navigate(path);
    if (drawerOpen) setDrawerOpen(false);
  };

  return (
    <Layout>
      <Sider width={266} className="hidden lg:block">
        <div className="p-5 min-h-screen flex flex-col justify-between ">
          <div>
            <div className="flex items-center  gap-2">
              <Avatar
                shape="square"
                size={50}
                src="https://i.pravatar.cc/300"
              />
              <div>
                <h4 className="m-0 mb-1">Muhammad Usama</h4>
                <p className="m-0 text-[#1F1F22]">marki@demo.com</p>
              </div>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  padding: "15px",
                },
                components: {
                  Menu: {
                    itemSelectedBg: "#89089F",
                    itemSelectedColor: "#fff",
                    iconSize: "22px",
                    itemHeight: "56px",
                  },
                },
              }}
            >
              <Menu
                defaultSelectedKeys={["dashboard"]}
                items={items}
                mode="vertical"
                className="mt-5"
                onClick={(e) => routeTo("/app/" + e.key)}
              />
            </ConfigProvider>
          </div>
          <Button type="text" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Button>
        </div>
      </Sider>
      <Drawer
        open={drawerOpen}
        width={300}
        onClose={() => setDrawerOpen(false)}
        placement="left"
        headerStyle={{ display: "none" }}
      >
        <div className=" min-h-full flex flex-col justify-between ">
          <div>
            <div className="flex items-center  gap-2">
              <Avatar
                shape="square"
                size={50}
                src="https://i.pravatar.cc/300"
              />
              <div>
                <h4 className="m-0 mb-1">Muhammad Usama</h4>
                <p className="m-0 text-[#1F1F22]">marki@demo.com</p>
              </div>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  padding: "15px",
                },
                components: {
                  Menu: {
                    itemSelectedBg: "#89089F",
                    itemSelectedColor: "#fff",
                    iconSize: "22px",
                    itemHeight: "56px",
                  },
                },
              }}
            >
              <Menu
                defaultSelectedKeys={["dashboard"]}
                items={items}
                mode="vertical"
                className="mt-5"
                onClick={(e) => routeTo("/app/" + e.key)}
              />
            </ConfigProvider>
          </div>
          <Button type="text" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Button>
        </div>
      </Drawer>
      <Layout>
        <Header className="lg:hidden px-7">
          <Button
            type="icon"
            className="p-2 text-white"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          />
        </Header>
        <Content className="min-h-screen p-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppTemplate;
