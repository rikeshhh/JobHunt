import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <Header />
      <main className=" text-base sm:text-lg md:text-xl lg:text-2xl ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
