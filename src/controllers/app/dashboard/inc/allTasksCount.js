import Task from "../../../../models/app/Task.js";

export default async function () {
    return await Task.countDocuments({});
}