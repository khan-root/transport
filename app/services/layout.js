

export const metadata = {
  metadataBase: new URL('https://www.dubairentalbuses.com/services'),
  title: {
    default: 'Services',
    template: '%s | Bus',
  },
  keywords: [
    "Dubai Bus Rental Services",
    "Zain Express Services",
    "Corporate Bus Hire Dubai",
    "Group Transport Solutions",
    "Event Transportation Dubai",
    "Luxury Bus Rental Dubai",
    "Airport Transfers Dubai",
    "Private Bus Hire",
    "VIP Bus Services",
    "Shuttle Bus Dubai",
    "Executive Transport Dubai",
    "Wedding Bus Hire",
    "Corporate Travel Services",
    "Tourist Bus Services Dubai",
    "School Bus Rental",
    "Bus Rental for Events",
    "Comfortable Bus Trips",
    "Bus Charter Services",
    "Dubai Coach Rental",
    "Passenger Transport Services"
  ],
  description: 'Learn more about Zain Express, our reliable bus rental services, our mission, and how we provide top-quality transportation solutions in Dubai.',
};

export default function ServicesLayout({ children }) {
  return (
    <>
        {children}
    </>
  );
}
