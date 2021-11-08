import moment from "moment";
import Task from "../../../models/app/Task.js";
import Issue from "../../../models/app/Issue.js";
import Meeting from "../../../models/app/Meeting.js";

export const index = async (req, res) => {
  let data = null;
  let allTasksCount = null;
  let allIssuesCount = null;
  let allMeetingsCount = null;
  let today = null;
  try {
    today = await moment(new Date()).format("MMMM Do YYYY");
    allTasksCount = await Task.countDocuments({});
    allIssuesCount = await Issue.countDocuments({});
    allMeetingsCount = await Meeting.countDocuments({});
    data = [
      {
        today: today,
        allTasksCount: allTasksCount,
        allIssuesCount: allIssuesCount,
        allMeetingsCount: allMeetingsCount,
      },
    ][0];
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
