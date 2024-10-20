
export const metadata = {
  metadataBase: new URL('https://www.dubairentalbuses.com/gallery'),
  title: {
    default: 'Gallery',
    template: '%s | Bus',
  },
  keywords: [
    "Bus Rental Gallery",
    "Zain Express Gallery",
    "Dubai Bus Rental Photos",
    "Corporate Bus Hire Gallery",
    "Bus Fleet Images Dubai",
    "Luxury Bus Rental Gallery",
    "Dubai Group Transportation Gallery",
    "Event Transportation Photos",
    "Zain Transport Vehicles",
    "Dubai Bus Service Pictures",
    "Minibus Rental Photos",
    "Luxury Coach Images",
    "Corporate Transport Gallery",
    "Fleet Rental Gallery Dubai",
    "VIP Bus Rental Photos",
    "Private Bus Hire Dubai",
    "Shuttle Bus Gallery",
    "Tour Bus Gallery Dubai",
    "Passenger Transport Gallery",
    "Dubai Bus Hire Photos"
  ],
  description: 'Learn more about Zain Express, our reliable bus rental services, our mission, and how we provide top-quality transportation solutions in Dubai.',
};

export default function GalleryLayout({ children }) {
  return (
    <>
        {children}
    </>
  );
}
