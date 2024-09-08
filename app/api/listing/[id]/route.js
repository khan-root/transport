import { deleteListingById, getListingById, updateListingById } from "@/controllers/listingController";
import { connectToDatabase } from "@/utils/dbConnect";

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const listing = await getListingById(id);
    return new Response(JSON.stringify({ success: true, data: listing }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const updateData = await req.json(); // Extract data from request body
    const updatedListing = await updateListingById(id, updateData);
    return new Response(JSON.stringify({ success: true, data: updatedListing }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const deletedListing = await deleteListingById(id);
    return new Response(JSON.stringify({ success: true, data: deletedListing }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}