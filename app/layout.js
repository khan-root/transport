import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CopyRight from "@/components/CopyRight";
import ScrollToTopArrow from "@/components/ScrollToTopArrow";
import ReachOutTab from "@/components/ReachOutTab";
const inter = Roboto({weight :['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'relative ' + inter.className}>
        
        <Navbar />  
          {children}
          <ScrollToTopArrow />
          <ReachOutTab />
        <Footer />
        <CopyRight />
      </body>
    </html>
  );
}


