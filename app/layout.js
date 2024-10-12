import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import CopyRight from "@/app/components/CopyRight";
import ScrollToTopArrow from "@/app/components/ScrollToTopArrow";
import CustomNavbar from "@/app/components/CustomNavbar";
import ReachOutTab from "@/app/components/ReachOutTab";
import fico from '../public/favicon.ico'
const inter = Roboto({weight :['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home",
  icons:{
    icon:fico.src
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'relative ' + inter.className}>
        
        <CustomNavbar />  
          {children}
          <ReachOutTab />
          <ScrollToTopArrow />
        <Footer />
        <CopyRight />
      </body>
    </html>
  );
}


