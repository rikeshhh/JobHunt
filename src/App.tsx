import "@fontsource/roboto/700.css";
import { Header } from "./frontend/layout/header/header";
import { Footer } from "./frontend/layout/footer/footer";
import { Location } from "./frontend/pages/location";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />fdf
    </>
  );
}

export default App;
