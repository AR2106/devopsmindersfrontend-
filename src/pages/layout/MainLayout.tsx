import { type ReactNode } from "react";

import Navbar from "./Navbar";
import { Footer } from "../../components/layout/Footer";
// import { Navbar } from "../../components/layout/Navbar";


type Props = {
  children: ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
