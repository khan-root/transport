import Listing from "@/models/Listing";
import { listingSchema } from "@/utils/scehmaValidation";
import { NextResponse } from "next/server";


export const createListing = async (req, res) => {
  try {
    // Validate request body
    const { error } = listingSchema.listingSchemavalidate(req.body);
    if (error) {
      return res.status(400).json({ success: false, error: error.details[0].message });
    }

    // Proceed with creating the listing
    const { location, price, passenger, seats, class: classType, title, image, description } = req.body;

    const listing = new Listing({
      location,
      price,
      passenger,
      seats,
      class: classType,
      title,
      image,
      description,
    });

    await listing.save();
    res.status(201).json({ success: true, data: listing });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};



export const getAllListings = async () => {
  try {
    // Retrieve all listings from the database
    const listings = await Listing.find();
    return listings;
  } catch (error) {
    throw new Error(error.message);
  }
};



// Retrieve a single listing by ID
export const getListingById = async (id) => {
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      throw new Error('Listing not found');
    }
    return listing;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a listing by ID
export const updateListingById = async (id, updateData) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedListing) {
      throw new Error('Listing not found');
    }
    return updatedListing;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const deleteListingById = async (id) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      throw new Error('Listing not found');
    }
    return deletedListing;
  } catch (error) {
    throw new Error(error.message);
  }
};