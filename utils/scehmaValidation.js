import Joi from 'joi';

export const listingSchema = Joi.object({
  location: Joi.string().required(),
  price: Joi.number().required(),
  passenger: Joi.number().required(),
  seats: Joi.number().required(),
  class: Joi.string().required(),
  title: Joi.string().required(),
  image: Joi.string().uri().required(), // Ensure it's a valid URI
  description: Joi.string().required(),
});
