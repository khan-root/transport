import mongoose from 'mongoose';

export async function connectToDatabase() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error('MONGODB_URI environment variable not defined');
  }

  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
