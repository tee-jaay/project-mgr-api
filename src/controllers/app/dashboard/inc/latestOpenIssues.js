import Issue from "../../../../models/app/Issue.model.js";

export default async function () {
    return await Issue.find(
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
}