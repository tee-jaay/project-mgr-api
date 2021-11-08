import moment from "moment";

export const index = async (req, res) => {
  let today = moment(new Date()).format("MMMM Do YYYY");
  try {
    const data = await today;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
