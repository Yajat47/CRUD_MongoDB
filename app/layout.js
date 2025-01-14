// import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skia Admin",
  description: "Admin Portal for Skia",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en">
      <body >
        <div className="max-w-3xl  lg:mx-auto md:mx-auto  lg:p-4 md:p-4">
          {/* <Navbar /> */}
          <div className="lg:mt-8 md:mt-8">{children}</div>
        </div>
      </body></html>
    
  );
}
