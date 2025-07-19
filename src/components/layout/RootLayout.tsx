import { Outlet } from "react-router-dom";
import ScrollToTop from "../dashboard/ScrollToTop" 
import Footer from "@/components/layout/Footer"; 

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <Outlet /> 
      </main>
      <Footer /> 
    </>
  );
};

export default RootLayout;