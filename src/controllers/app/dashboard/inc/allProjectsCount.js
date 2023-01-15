import Project from "../../../../models/app/Project.js";

export default async function () {
    return await Project.countDocuments({});
}