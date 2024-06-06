import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/route";
import { ConfigProvider } from "antd";
import { THEME } from "./constants/antdTheme";

function App() {
  return (
    <ConfigProvider theme={THEME}>
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}

export default App;
