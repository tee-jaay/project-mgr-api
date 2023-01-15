import Meeting from "../../../../models/app/Meeting.model.js";

export default async function () {
    return await Meeting.countDocuments({});
}