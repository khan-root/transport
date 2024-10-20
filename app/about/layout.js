
export const metadata = {
  metadataBase: new URL('https://www.dubairentalbuses.com/about'),
  title: {
    default: 'About',
    template: '%s | Bus',
  },
  keywords: [
    "About Zain Express",
    "Zain Express History",
    "Bus Rental Company Dubai",
    "Reliable Bus Services",
    "Dubai Transport Solutions",
    "Our Mission",
    "Zain Express Team",
    "Corporate Transport Provider",
    "Bus Rental Philosophy",
    "Dubai Bus Fleet Information",
    "Customer Testimonials",
    "Quality Transportation Services",
    "Zain Transport Story",
    "Professional Bus Rental",
    "About Us",
    "Bus Rental Leadership",
    "Sustainable Transport Solutions",
    "Safety and Comfort in Bus Rentals",
    "Community Engagement",
    "Zain Express Values"
  ],
  description: 'Learn more about Zain Express, our reliable bus rental services, our mission, and how we provide top-quality transportation solutions in Dubai.',
};

export default function AboutLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
