import { v4 as uuidv4 } from "uuid";
import ProjectAssignee from "../../../models/app/ProjectAssignee.js";
import faker from "faker";
import User from "../../../models/user/auth/User.model.js";
import mongoose from "mongoose";

export const index = async (req, res) => {
  const projectAssignees = await ProjectAssignee.find();
  res.status(200).json(projectAssignees);
};

export const store = async (req, res) => {
  const {} = req.body;
  const newProjectAssignee = new ProjectAssignee({
    id: uuidv4(),
  });
  try {
    const savedProjectAssignee = await newProjectAssignee.save();
    res.status(201).json(savedProjectAssignee);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getProjectAssignee = await ProjectAssignee.find({
      slug: req.params.slug,
    });
    res.status(200).json(getProjectAssignee);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send(`destroy`);
};

// Faker entries
// export const fakerProjects = async (req, res) => {
//   var db = mongoose.connection;
//   // count users
//   var usersCount = await db.collection("users").count();
//   // get users
//   var getData = await db.collection("users").find().toArray();
//   for (let i = 0; i < usersCount; i++) {
//     var userId = getData[i]._id;

//     var title = faker.lorem.sentence();
//     var createdBy = userId;
//     var status = faker.datatype.number(8);
//     var description = faker.lorem.paragraph();
//     var repoLink = faker.internet.url();
//     var urlOne = faker.internet.url();
//     var urlTwo = faker.internet.url();
//     var color = faker.internet.color();
//     var image = faker.image.imageUrl();

//     var fakeProject = new Project({
//       title,
//       slug: uuidv4(),
//       createdBy,
//       status,
//       description,
//       repoLink,
//       urlOne,
//       urlTwo,
//       color,
//       image,
//     });
//     fakeProject.save((err, data) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//   } // for

//   // var getData = await db.collection("users").findOne({
//   //   username: "Jarrod.Witting",
//   // });
//   // var data = getData._id;

//   // console.log("result # ", size);

//   res.status(200).json("faker projects");
// };
