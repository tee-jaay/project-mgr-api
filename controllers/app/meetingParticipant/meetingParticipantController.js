import MeetingParticipant from "../../../models/app/MeetingParticipant.js";

export const index = async (req, res) => {
  const meetingParticipants = await MeetingParticipant.find();
  res.status(200).json(meetingParticipants);
};

export const store = async (req, res) => {
  const {} = req.body;
  const newMeetingParticipant = new MeetingParticipant({});
  try {
    const savedMeetingParticipant = await newMeetingParticipant.save();
    res.status(201).json(savedMeetingParticipant);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getMeetingParticipant = await MeetingParticipant.find({
      _id: req.params.id,
    });
    res.status(200).json(getMeetingParticipant);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send(`destroy`);
};
