import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/compnents/Navbar";
import Footer from "@/compnents/Footer";

const inter = Roboto({weight :['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'flex flex-col h-screen border boder-black ' + inter.className}>
        <Navbar />  
        {children}
        <Footer />
      </body>
    </html>
  );
}
