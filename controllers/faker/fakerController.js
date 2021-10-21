import mongoose from "mongoose";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import faker from "faker";
import User from "../../models/auth/User.js";
import Project from "../../models/app/Project.js";

export const fakerRegisters = async (req, res) => {
  var randomUsername = faker.internet.userName();
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomPassword = faker.internet.password();
  for (var i = 0; i < 5; i++) {
    var fakeeUser = new User({
      username: randomUsername + i,
      name: randomName,
      email: i + randomEmail,
      password: CryptoJS.AES.encrypt(
        randomPassword,
        process.env.JWT_SEC
      ).toString(),
    });
    await fakeeUser.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }
  res.send("faker register store successful");
};

export const fakerProjects = async (req, res) => {
  var db = mongoose.connection;
  // count users
  var usersCount = await db.collection("users").count();
  // get users
  var getData = await db.collection("users").find().toArray();
  for (let i = 0; i < usersCount; i++) {
    var userId = getData[i]._id;

    var title = faker.lorem.sentence();
    var createdBy = userId;
    var allStatus = ["active", "cancelled", "completed", "review"];
    var status = allStatus[(Math.random() * allStatus.length) | 0];
    var description = faker.lorem.paragraph();
    var repoLink = faker.internet.url();
    var urlOne = faker.internet.url();
    var urlTwo = faker.internet.url();
    var color = faker.internet.color();
    var image = faker.image.imageUrl();

    var fakeProject = new Project({
      title,
      slug: uuidv4(),
      createdBy,
      status,
      description,
      repoLink,
      urlOne,
      urlTwo,
      color,
      image,
    });
    fakeProject.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }
  res.status(200).json("faker project store successful");
};
