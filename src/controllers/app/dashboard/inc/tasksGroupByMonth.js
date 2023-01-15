import Task from "../../../models/app/Task.js";


export const getTasksByStatusAndGroupByMonth = async (req, res) => {

  // ChatGPT
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date();
  const nineMonthsAgo = new Date(date.setMonth(date.getMonth() - 9));
  const pipeline = [
    {
      $match: {
        createdAt: { $gte: nineMonthsAgo }
      }
    },
    {
      $group: {
        _id: { month: { $month: "$createdAt" }, status: "$status" },
        count: { $sum: 1 }
      }
    },
    {
      $sort: {
        "_id.month": 1,
      }
    }
  ];

  try {
    await Task.aggregate(pipeline)
      .then(result => {
        console.log(result);
        result.forEach(r => {
          r._id.month = months[r._id.month - 1];
        });
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  // ChatGPT

  // let year = req.params.year;
  // try {
  //   var data = await Task.aggregate([
  //     { $match: { year, status: "review" } },
  //     {
  //       $group: {
  //         _id: "$month",
  //         count: { $sum: 1 },
  //       },
  //     },
  //   ]);
  //   console.log(data);
  //   res.status(200).json(data);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
};
