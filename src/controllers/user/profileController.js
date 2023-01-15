import Profile from "../../models/user/profile/Profile.js";
import User from "../../models/user/auth/User.model.js";
import generateUUID from "../../services/generateUUID.js";

export const store = async (req, res) => {
  const profile = new Profile({
    id: generateUUID(),
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
    const profile = await Profile.findOne({ id: req.params.userId });
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = async (req, res) => {
  const {
    title,
    bio,
    headerBg,
    industry,
    address,
    country,
    phone,
    favOs,
    website,
    facebook,
    twitter,
    github,
    gitlab,
    instagram,
    linkedin,
    pinterest,
    language,
    fdotWeek,
    timezone,
    sidebar,
    avatar,
  } = req.body;

  try {
    const user = await User.findOne({ id: req.params.userId });
    user.profile.title = title;
    user.profile.bio = bio;
    user.profile.headerBg = headerBg;
    user.profile.industry = industry;
    user.profile.address = address;
    user.profile.country = country;
    user.profile.phone = phone;
    user.profile.favOs = favOs;
    user.profile.website = website;
    user.profile.facebook = facebook;
    user.profile.twitter = twitter;
    user.profile.github = github;
    user.profile.gitlab = gitlab;
    user.profile.instagram = instagram;
    user.profile.linkedin = linkedin;
    user.profile.pinterest = pinterest;
    user.profile.language = language;
    user.profile.fdotWeek = fdotWeek;
    user.profile.timezone = timezone;
    user.profile.sidebar = sidebar;
    user.profile.avatar = avatar;

    const result = await user.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const destroy = (_req, res) => {
  res.send("destroy");
};

export const getProfileByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const profile = await Profile.findOne({ userId });
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json(err);
  }
};
