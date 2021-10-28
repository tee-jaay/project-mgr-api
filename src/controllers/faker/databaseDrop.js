import mongoose from "mongoose";

export const databaseDrop = async (req, res) => {
  var collectionName = req.params.db;
  var db = mongoose.connection;
  try {
    var coll = db.collection(collectionName);
    var result = await coll.drop();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};
