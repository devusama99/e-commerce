import { RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/styles.css";
import { router } from "./router/router";
import { ConfigProvider } from "antd";
import { Theme } from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={Theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
