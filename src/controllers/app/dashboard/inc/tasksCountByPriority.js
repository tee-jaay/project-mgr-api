import Task from "../../../../models/app/Task.js";

export default function () {
    let taskCounts;

    return new Promise((resolve, reject) => {
        Task.aggregate([
            {
                $group: {
                    _id: "$priority",
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ], (err, result) => {
            if (err) {
                reject(err);
            } else {
                taskCounts = result;
                resolve(taskCounts);
            }
        });
    });
}