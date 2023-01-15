import Issue from "../../../../models/app/Issue.model.js";

export default async function () {
    return await Issue.countDocuments({});
}