import mongoose from "mongoose";
import CryptoJS from "crypto-js";
import { nanoid } from "nanoid";
import slugify from "slugify";
import faker from "faker";
import User from "../../models/user/auth/User.model.js";
import Project from "../../models/app/Project.js";
import Task from "../../models/app/Task.js";
import TaskChat from "../../models/app/TaskChat.model.js";
import Todo from "../../models/app/Todo.js";
import Issue from "../../models/app/Issue.model.js";
import Meeting from "../../models/app/Meeting.model.js";
import TimeSheet from "../../models/app/TimeSheet.model.js";
import moment from "moment";
import Profile from "../../models/user/profile/Profile.js";
import WallPost from "../../models/user/social/WallPost.model.js";

const makeDate = (val) => {
  let result = moment(val).format("YYYY-MM-DD");
  return result;
};

export const fakerRegisters = async (_req, res) => {
  var randomPassword = "654321";
  for (var i = 0; i < 15; i++) {
    var randomUsername = faker.internet.userName();
    var randomName = faker.name.findName();
    var randomEmail = faker.internet.userName() + i + "@example.com";
    var allRoles = ["user", "admin", "client", "guest", "visitor", "bot"];
    var role = allRoles[(Math.random() * allRoles.length) | 0];
    var title = faker.name.jobTitle();
    var bio = faker.lorem.sentence();
    var OSArr = [
      "windows 10",
      "windows 11",
      "windows 7",
      "MacOS",
      "Ubuntu",
      "KaOS",
      "Porteus",
      "Android",
      "FreeBSD",
    ];
    var favOs = OSArr[(Math.random() * OSArr.length) | 0];
    var website = faker.internet.url();
    var facebook = faker.internet.url();
    var twitter = faker.internet.url();
    var github = faker.internet.url();
    var gitlab = faker.internet.url();
    var instagram = faker.internet.url();
    var linkedin = faker.internet.url();
    var github = faker.internet.url();
    var pinterest = faker.internet.url();
    var industry = faker.company.companyName();
    var address = faker.address.streetAddress();
    var country = faker.address.country();
    var phone = faker.phone.phoneNumber();
    var langArr = [
      "az",
      "ar",
      "cz",
      "de",
      "de_AT",
      "de_CH",
      "en",
      "en_AU",
      "en_AU_ocker",
      "en_BORK",
      "en_CA",
      "en_GB",
      "en_IE",
      "en_IND",
      "en_US",
      "en_ZA",
      "es",
      "es_MX",
      "fa",
      "fi",
      "fr",
      "fr_CA",
      "fr_CH",
      "ge",
      "id_ID",
      "it",
      "ja",
      "ko",
      "nb_NO",
      "ne",
      "nl",
      "nl_BE",
      "pl",
      "pt_BR",
      "pt_PT",
      "ro",
      "ru",
      "sk",
      "sv",
      "tr",
      "uk",
      "vi",
      "zh_CN",
      "zh_TW",
    ];
    var language = langArr[(Math.random() * langArr.length) | 0];
    var fdotWeek = faker.date.weekday();
    var timezone = faker.address.timeZone();
    var sidebar = faker.datatype.boolean();
    var avatar = "https://i.pravatar.cc/150/150";

    var fakeeUser = new User({
      id: nanoid(),
      username: randomUsername + i,
      name: randomName,
      email: i + randomEmail,
      role: { type: role },
      profile: {
        title: title,
        bio: bio,
        favOs: favOs,
        website: website,
        facebook: facebook,
        twitter: twitter,
        github: github,
        gitlab: gitlab,
        instagram: instagram,
        linkedin: linkedin,
        pinterest: pinterest,
        industry: industry,
        address: address,
        country: country,
        phone: phone,
        language: language,
        fdotWeek: fdotWeek,
        timezone: timezone,
        sidebar: sidebar,
        avatar: avatar,
      },

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
  return res.status(201).json("faker users created");
};

export const fakerProjects = async (_req, res) => {
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
  for (let index = 0; index < 5; index++) {
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
      var image = faker.image.imageUrl();
      var id = nanoid();
      var slug = slugify(title, slugifyOptions);
      var comments = [
        {
          commentBy: userName,
          comment: faker.lorem.paragraph(),
        },
        {
          commentBy: userName,
          comment: faker.lorem.paragraph(),
        },
        {
          commentBy: userName,
          comment: faker.lorem.paragraph(),
        },
        {
          commentBy: userName,
          comment: faker.lorem.paragraph(),
        },
        {
          commentBy: userName,
          comment: faker.lorem.paragraph(),
        },
      ];
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
        image,
        comments,
      });
      fakeProject.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
  res.status(201).json("faker projects created");
};

export const fakerTasks = async (_req, res) => {
  var db = mongoose.connection;
  // count projects
  var projectsCount = await db.collection("projects").count();
  // get projects
  var getData = await db.collection("projects").find().toArray();

  for (let index = 0; index < 2; index++) {
    for (let i = 0; i < projectsCount; i++) {
      var projectId = getData[i].id;
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

      var plannedStart = makeDate(faker.date.past().toString());
      var plannedEnd = makeDate(faker.date.future().toString());
      var actualStart = makeDate(faker.date.future().toString());
      var actualEnd = makeDate(faker.date.past().toString());

      var priorityArr = ["Critical", "Low", "Medium", "High"];
      var priority = priorityArr[(Math.random() * priorityArr.length) | 0];

      var color = faker.internet.color();

      let monthArr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let month = monthArr[(Math.random() * monthArr.length) | 0];

      let yearArr = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];
      let year = yearArr[(Math.random() * yearArr.length) | 0];

      var fakeTask = new Task({
        id: nanoid(),
        projectId,
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
        month,
        year,
      });
      fakeTask.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
    } // for
  }

  return res.status(201).json("faker tasks created");
};

export const fakerTaskMessages = async (_req, res) => {
  let db = mongoose.connection;
  // count tasks
  var tasksCount = await db.collection("tasks").count();
  // get tasks
  let getTasksData = await db.collection("tasks").find().toArray();

  for (let index = 0; index < 5; index++) {
    for (let i = 0; i < tasksCount; i++) {
      let taskId = getTasksData[i].id;
      let createdBy = getTasksData[i].createdBy;
      let message = faker.lorem.paragraph();
      let bookmark = faker.datatype.boolean();
      let filePath = faker.internet.url();
      let ban = faker.datatype.boolean();

      let fakeTaskMessage = new TaskChat({
        id: nanoid(),
        taskId,
        createdBy,
        message,
        bookmark,
        filePath,
        ban,
      });
      await fakeTaskMessage.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
    } // for
  } // no of fake messages

  return res.status(201).json("faker task's messages created");
};

export const fakerTodos = async (_req, res) => {
  var db = mongoose.connection;
  // count tasks
  var taskCount = await db.collection("tasks").count();
  // get tasks
  var getTaskData = await db.collection("tasks").find().toArray();

  for (let index = 0; index < 3; index++) {
    for (let i = 0; i < taskCount; i++) {
      var taskId = getTaskData[i].id;
      var createdBy = getTaskData[i].createdBy;
      var todo = faker.lorem.sentence();
      var done = faker.datatype.boolean();
      var endDate = makeDate(faker.date.past());
      var doneBy = createdBy;

      var fakeTodo = new Todo({
        id: nanoid(),
        taskId,
        createdBy,
        doneBy,
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
  }

  res.status(201).json("faker todos created");
};

export const fakerIssues = async (req, res) => {
  var db = mongoose.connection;
  // count projects
  var projectsCount = await db.collection("projects").count();
  // get projects
  var getData = await db.collection("projects").find().toArray();

  for (let index = 0; index < 2; index++) {
    for (let i = 0; i < projectsCount; i++) {
      var projectId = getData[i].id;
      var createdBy = getData[i].createdBy;
      var title = faker.lorem.sentence();
      var description = faker.lorem.paragraph();

      var bookmarkArr = ["1", "0"];
      var bookmark = bookmarkArr[(Math.random() * bookmarkArr.length) | 0];

      var statusArr = ["open", "closed"];
      var status = statusArr[(Math.random() * statusArr.length) | 0];

      var start = makeDate(faker.date.past());
      var end = makeDate(faker.date.future());

      var priorityArr = ["urgent", "low", "medium", "high"];
      var priority = priorityArr[(Math.random() * priorityArr.length) | 0];

      var severityArr = ["minor", "major", "moderate", "critical"];
      var severity = severityArr[(Math.random() * severityArr.length) | 0];

      var issueTypeArr = ["bug", "feature", "upgrade", "update", "maintenance"];
      var issueType = issueTypeArr[(Math.random() * issueTypeArr.length) | 0];

      var fakeIssue = new Issue({
        id: nanoid(),
        taskId: req.body.taskId,
        projectId,
        createdBy,
        title,
        description,
        bookmark,
        status,
        start,
        end,
        priority,
        type: issueType,
        severity,
      });
      fakeIssue.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
    } // for
  }

  res.status(201).json("faker issues created");
};

export const fakerMeetings = async (_req, res) => {
  var db = mongoose.connection;
  // count projects
  var projectsCount = await db.collection("projects").count();
  // get projects
  var getData = await db.collection("projects").find().toArray();

  for (let index = 0; index < 2; index++) {
    for (let i = 0; i < projectsCount; i++) {
      var projectId = getData[i].id;
      var taskId = "";
      var createdBy = getData[i].createdBy;
      var title = faker.lorem.sentence();
      var agenda = faker.lorem.paragraph();
      var bookmark = "1";

      var statusArr = [
        "active",
        "cancelled",
        "completed",
        "review",
        "not started",
      ];
      var status = statusArr[(Math.random() * statusArr.length) | 0];

      var date = makeDate(faker.date.past());
      var time = faker.datatype.number({ min: 1, max: 23 });
      var duration = faker.datatype.number({ min: 1, max: 15 });

      var location = faker.address.city();
      var address = faker.address.streetAddress();
      var phone = faker.phone.phoneNumber();

      var fakeMeeting = new Meeting({
        id: nanoid(),
        projectId,
        taskId,
        createdBy,
        title,
        agenda,
        bookmark,
        status,
        date,
        time,
        duration,
        location,
        address,
        phone,
      });
      fakeMeeting.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
    } // for
  }

  res.send("faker meetings");
};

export const fakerTimeSheets = async (_req, res) => {
  var db = mongoose.connection;
  // count projects
  var projectsCount = await db.collection("projects").count();
  // get projects
  var getData = await db.collection("projects").find().toArray();

  for (let index = 0; index < 2; index++) {
    for (let i = 0; i < projectsCount; i++) {
      var projectId = getData[i].id;
      var taskId = "";
      var createdBy = getData[i].createdBy;
      var title = faker.lorem.sentence();
      var day = faker.date.weekday();
      var hour = faker.datatype.number({ min: 1, max: 8 });
      var min = faker.datatype.number({ min: 1, max: 59 });
      var note = faker.lorem.paragraph();

      var fakeTimeSheet = new TimeSheet({
        id: nanoid(),
        projectId,
        taskId,
        createdBy,
        title,
        day,
        hour,
        min,
        note,
      });
      fakeTimeSheet.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
    } // for
  }

  res.send("faker timesheets");
};

export const fakerProfiles = async (_req, res) => {
  var db = mongoose.connection;
  // count users
  var usersCount = await db.collection("users").count();
  // get users
  var getData = await db.collection("users").find().toArray();

  for (let i = 0; i < usersCount; i++) {
    var id = nanoid();
    var userId = getData[i].id;
    var title = faker.name.jobTitle();
    var bio = faker.lorem.sentence();

    var OSArr = [
      "windows 10",
      "windows 11",
      "windows 7",
      "MacOS",
      "Ubuntu",
      "KaOS",
      "Porteus",
      "Android",
      "FreeBSD",
    ];
    var favOs = OSArr[(Math.random() * OSArr.length) | 0];

    var website = faker.internet.url();
    var facebook = faker.internet.url();
    var twitter = faker.internet.url();
    var github = faker.internet.url();
    var gitlab = faker.internet.url();
    var instagram = faker.internet.url();
    var linkedin = faker.internet.url();
    var github = faker.internet.url();
    var pinterest = faker.internet.url();

    var industry = faker.company.companyName();
    var address = faker.address.streetAddress();
    var country = faker.address.country();
    var phone = faker.phone.phoneNumber();

    var langArr = [
      "az",
      "ar",
      "cz",
      "de",
      "de_AT",
      "de_CH",
      "en",
      "en_AU",
      "en_AU_ocker",
      "en_BORK",
      "en_CA",
      "en_GB",
      "en_IE",
      "en_IND",
      "en_US",
      "en_ZA",
      "es",
      "es_MX",
      "fa",
      "fi",
      "fr",
      "fr_CA",
      "fr_CH",
      "ge",
      "id_ID",
      "it",
      "ja",
      "ko",
      "nb_NO",
      "ne",
      "nl",
      "nl_BE",
      "pl",
      "pt_BR",
      "pt_PT",
      "ro",
      "ru",
      "sk",
      "sv",
      "tr",
      "uk",
      "vi",
      "zh_CN",
      "zh_TW",
    ];
    var language = langArr[(Math.random() * langArr.length) | 0];

    var fdotWeek = faker.date.weekday();
    var timezone = faker.address.timeZone();
    var sidebar = faker.datatype.boolean();
    var avatar = "https://i.pravatar.cc/150/150";

    var fakeProfile = new Profile({
      id,
      userId,
      title,
      bio,
      industry,
      address,
      country,
      phone,
      favOs,
      website,
      facebook,
      twitter,
      github,
      gitlab,
      instagram,
      linkedin,
      pinterest,
      language,
      fdotWeek,
      timezone,
      sidebar,
      avatar,
    });
    fakeProfile.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }

  res.status(201).json("faker profiles created");
};

export const fakerDbSeed = async (req, res) => {
  await fakerRegisters();
  await fakerProjects();
  console.log("faker db seed");
};

export const fakerProfileWallposts = async (req, res) => {
  var db = mongoose.connection;
  // count users
  var usersCount = await db.collection("users").count();
  // get users
  var getData = await db.collection("users").find().toArray();

  for (let index = 0; index < 3; index++) {
    for (let i = 0; i < usersCount; i++) {
      var userId = getData[i].id;
      var postBy = faker.lorem.sentence();
      var content = faker.lorem.paragraph();

      var fakeWallPost = new WallPost({
        id: nanoid(),
        userId: userId,
        postBy: postBy,
        content: content,
      });
      fakeWallPost.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
  res.status(201).json("faker profile wall posts created");
};
