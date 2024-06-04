import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { HeroSection } from "../pages/heroSection";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
