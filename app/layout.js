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
  metadataBase: new URL('https://www.dubairentalbuses.com/'),
  title: {
    default: 'Home',
    template: `%s | Bus`
  },
 keywords : [
  "Transport Services",
  "Bus Rental Dubai",
  "Charter Bus",
  "Luxury Bus Rental",
  "Dubai Group Transport",
  "Corporate Bus Hire",
  "Tour Bus Dubai",
  "Event Transport Solutions",
  "Dubai Minibus Rental",
  "Private Bus Hire",
  "Affordable Bus Hire",
  "Dubai Coach Services",
  "VIP Bus Service",
  "Shuttle Bus Dubai",
  "Dubai Airport Transfers",
  "Luxury Coach Dubai",
  "Wedding Bus Rental",
  "Executive Transport",
  "Dubai Sightseeing Buses",
  "School Bus Rental",
  "Passenger Transport Dubai",
  "Fleet Bus Rental",
  "Safe Bus Journeys",
  "Comfortable Bus Trips",
  "Tourist Bus Dubai",
  "Zain Transport Services",
  "Dubai", "Bus", "Service"
],
 openGraph: {
    description: 'At Zain Express, we provide reliable and affordable bus rental services for group trips, corporate events, and special occasions. Our modern, well-maintained fleet ensures comfort, while our professional drivers prioritize safety and punctuality.'
  },
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


