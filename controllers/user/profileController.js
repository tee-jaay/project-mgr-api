import Profile from "../../models/user/Profile.js";

export const store = async (req, res) => {
  const profile = new Profile({
    userId: req.body.userId,
    title: req.body.title,
    industry: req.body.industry,
    country: req.body.country,
    phone: req.body.phone,
    fav_os: req.body.fav_os,
    website: req.body.website,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    github: req.body.github,
    gitlab: req.body.gitlab,
    instagram: req.body.instagram,
    pinterest: req.body.pinterest,
    language: req.body.language,
    fdot_week: req.body.fdot_week,
    timezone: req.body.timezone,
    sidebar: req.body.sidebar,
    avatar: req.body.avatar,
  });
  try {
    const savedProfile = await profile.save();
    res.status(200).json(savedProfile);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const profile = await Profile.find({ _id: req.params.id });
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send("destroy");
};
