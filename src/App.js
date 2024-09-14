import { RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";
import { router } from "./router/router";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
