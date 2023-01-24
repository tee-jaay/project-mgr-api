import moment from "moment";
import allProjectsCount from "./inc/allProjectsCount.js";
import allTasksCount from "./inc/allTasksCount.js";
import allIssuesCount from './inc/allIssuesCount.js';
import allMeetingsCount from "./inc/allMeetingsCount.js";
import recentProjects from "./inc/recentProjects.js";
import latestOpenIssues from "./inc/latestOpenIssues.js";
import tasksCountByPriority from "./inc/tasksCountByPriority.js";
import users from "./inc/users.js";

// Fetch various data for the dashboard stats
export const index = async (_req, res) => {
  let data = {};
  let today = "";
  let _allProjectsCount = 0;
  let _allTasksCount = 0;
  let _allIssuesCount = 0;
  let _allMeetingsCount = 0;
  let _recentProjects = [];
  let _latestOpenIssues = [];
  let _users = [];
  let _tasksCountByPriority = [];

  today = moment(new Date()).format("MMMM Do YYYY").toString();
  _allProjectsCount = (await allProjectsCount());
  _allTasksCount = (await allTasksCount());
  _allIssuesCount = (await allIssuesCount());
  _allMeetingsCount = (await allMeetingsCount());
  _recentProjects = (await recentProjects());
  _latestOpenIssues = (await latestOpenIssues());
  _users = (await users());
  _tasksCountByPriority = (await tasksCountByPriority());
  try {
    data = {
      today,
      allProjectsCount: _allProjectsCount,
      allTasksCount: _allTasksCount,
      allIssuesCount: _allIssuesCount,
      allMeetingsCount: _allMeetingsCount,
      recentProjects: _recentProjects,
      latestOpenIssues: _latestOpenIssues,
      users: _users,
      tasksCountByPriority: _tasksCountByPriority,
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
