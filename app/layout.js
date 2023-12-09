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
        <div>
          {/* <Navbar /> */}
          <div className="">{children}</div>
        </div>
      </body></html>
    
  );
}
