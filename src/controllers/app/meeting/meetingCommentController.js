import Meeting from "../../../models/app/Meeting.model.js";

export const create = async (req, res) => {
  const { meetingId } = req.params;
  const { message, createdBy } = req.body;
  try {
    const meeting = await Meeting.findOne({ id: meetingId });
    await meeting.comments.push({
      message: message,
      createdBy: createdBy,
    });
    const result = await meeting.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const destroy = (req, res) => {
  res.send(`destroy`);
};
