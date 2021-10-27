import mongoose from "mongoose";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";
import faker from "faker";
import User from "../../models/auth/User.js";
import Project from "../../models/app/Project.js";
import Task from "../../models/app/Task.js";
import Todo from "../../models/app/Todo.js";

export const fakerRegisters = async (req, res) => {
  var randomPassword = faker.internet.password();
  for (var i = 0; i < 35; i++) {
    var randomUsername = faker.internet.userName();
    var randomName = faker.name.findName();
    var randomEmail = faker.internet.email();
    var allRoles = ["admin", "user", "client", "visitor"];
    var role = allRoles[(Math.random() * allRoles.length) | 0];
    var fakeeUser = new User({
      id: uuidv4(),
      username: randomUsername + i,
      name: randomName,
      email: i + randomEmail,
      role,

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
  res.status(201).json("faker users created");
};

export const fakerProjects = async (req, res) => {
  var db = mongoose.connection;
  // count users
  var usersCount = await db.collection("users").count();
  // get users
  var getData = await db.collection("users").find().toArray();

  const slugifyOptions = {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: "vi",
    trim: true,
  };

  for (let i = 0; i < usersCount; i++) {
    var userName = getData[i].username;

    var title = faker.lorem.sentence();
    var createdBy = userName;
    var allStatus = ["active", "cancelled", "completed", "review"];
    var status = allStatus[(Math.random() * allStatus.length) | 0];
    var description = faker.lorem.paragraph();
    var repoLink = faker.internet.url();
    var urlOne = faker.internet.url();
    var urlTwo = faker.internet.url();
    var color = faker.internet.color();
    var image = faker.image.imageUrl();
    var id = uuidv4();
    var slug = slugify(title, slugifyOptions);

    var fakeProject = new Project({
      id,
      title,
      slug,
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
  res.status(201).json("faker projects created");
};

export const fakerTasks = async (req, res) => {
  var db = mongoose.connection;
  // count projects
  var projectsCount = await db.collection("projects").count();
  // get projects
  var getData = await db.collection("projects").find().toArray();

  for (let i = 0; i < projectsCount; i++) {
    var projectSlug = getData[i].slug;
    var createdBy = getData[i].createdBy;
    var title = faker.lorem.sentence();
    var description = faker.lorem.paragraph();
    var bookmark = "1";

    var statusArr = [
      "active",
      "cancelled",
      "completed",
      "review",
      "not started",
    ];
    var status = statusArr[(Math.random() * statusArr.length) | 0];

    var plannedStart = faker.date.past();
    var plannedEnd = faker.date.future();
    var actualStart = faker.date.future();
    var actualEnd = faker.date.past();

    var priorityArr = ["critical", "low", "medium", "high"];
    var priority = priorityArr[(Math.random() * priorityArr.length) | 0];

    var color = faker.internet.color();

    var fakeTask = new Task({
      id: uuidv4(),
      projectSlug,
      createdBy,
      title,
      description,
      bookmark,
      status,
      plannedStart,
      plannedEnd,
      actualStart,
      actualEnd,
      priority,
      color,
    });
    fakeTask.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  } // for

  res.status(201).json("faker tasks created");
};

export const fakerTodos = async (req, res) => {
  var db = mongoose.connection;
  // count tasks
  var taskCount = await db.collection("tasks").count();
  // get tasks
  var getTaskData = await db.collection("tasks").find().toArray();

  for (let i = 0; i < taskCount; i++) {
    var taskId = getTaskData[i].id;
    var createdBy = getTaskData[i].createdBy;
    var todo = faker.lorem.sentence();
    var done = faker.datatype.boolean();
    var endDate = faker.date.past();

    var fakeTodo = new Todo({
      id: uuidv4(),
      taskId,
      createdBy,
      todo,
      done,
      endDate,
    });
    fakeTodo.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  } // for

  res.status(201).json("faker todos created");
};
