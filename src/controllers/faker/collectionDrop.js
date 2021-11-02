import mongoose from "mongoose";

export const collectionDropOne = async (req, res) => {
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

export const collectionDropAll = async (req, res) => {
  var db = mongoose.connection;
  var coll = "";
  var result = "";
  var droppedCollections = [];
  try {
    const collections = Object.keys(db.collections);

    result = await collections.forEach((element) => {
      coll = db.collection(element);
      coll.drop();
      console.log("drop ", element);
      droppedCollections.push(element);
    });
    return res.status(200).json(droppedCollections);
  } catch (err) {
    console.error(err);
    return res.status(500).json("Fail: collection drop all");
  }
};
