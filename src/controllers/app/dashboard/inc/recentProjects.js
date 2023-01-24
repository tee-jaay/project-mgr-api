import Project from "../../../../models/app/Project.js";

export default async function () {
    return await Project.find(
        {},
        { _id: 0, id: 1, title: 1, status: 1 },
        { sort: { createdAt: -1 } }
    ).limit(5);
}