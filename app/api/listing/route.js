import { deleteListingById, getAllListings, getListingById, updateListingById } from "@/controllers/listingController";
import Listing from "@/models/Listing";
import { connectToDatabase } from "@/utils/dbConnect";


export async function POST(req, res) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const listing = new Listing(body);
    await listing.save();
    return new Response(JSON.stringify({ success: true, data: listing }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
    });
  }
}


export async function GET() {
  try {
    await connectToDatabase();
    const listings = await getAllListings(); // Call controller to get listings
    return new Response(JSON.stringify({ success: true, data: listings }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


// You can add more methods (GET, PUT, DELETE) here similarly
