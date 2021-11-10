import moment from "moment";
import Task from "../../../models/app/Task.js";
import Issue from "../../../models/app/Issue.js";
import Meeting from "../../../models/app/Meeting.js";
import Project from "../../../models/app/Project.js";

export const index = async (req, res) => {
  let data = null;
  let allTasksCount = null;
  let allIssuesCount = null;
  let allMeetingsCount = null;
  let today = null;
  let recentProjects = null;
  let latestOpenIssues = null;
  try {
    today = await moment(new Date()).format("MMMM Do YYYY");
    allTasksCount = await Task.countDocuments({});
    allIssuesCount = await Issue.countDocuments({});
    allMeetingsCount = await Meeting.countDocuments({});
    recentProjects = await Project.find(
      {},
      { id: 1, title: 1, status: 1 }
    ).limit(5);
    latestOpenIssues = await Issue.find(
      { status: "open" },
      {
        _id: 0,
        id: 1,
        projectId: 1,
        title: 1,
        status: 1,
        type: 1,
        severity: 1,
        createdBy: 1,
        createdAt: 1,
      }
    ).limit(6);
    data = [
      {
        today,
        allTasksCount,
        allIssuesCount,
        allMeetingsCount,
        recentProjects,
        latestOpenIssues,
      },
    ][0];
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
