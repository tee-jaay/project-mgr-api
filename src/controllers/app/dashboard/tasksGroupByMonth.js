import Task from "../../../models/app/Task.js";

export const tasksByMonth = async (req, res) => {
  let year = req.params.year;
  try {
    var data = await Task.aggregate([
      { $match: { year, status: "review" } },
      {
        $group: {
          _id: "$month",
          count: { $sum: 1 },
        },
      },
    ]);
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
