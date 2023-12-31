import "../../styles/main.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/frontend/Navbar";
import FooterComponent from "@/components/frontend/Footer";
export const metadata = {
  title: "Barista Gurus",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <div lang="en">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      {children}
      <FooterComponent />
    </div>
  );
}
