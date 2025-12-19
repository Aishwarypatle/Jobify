import User from "../models/User.js";

export const toggleBookmark = async (req, res) => {
  const { jobId } = req.body;

  const user = await User.findById(req.userId);

  const exists = user.bookmarks.includes(jobId);

  user.bookmarks = exists
    ? user.bookmarks.filter(id => id !== jobId)
    : [...user.bookmarks, jobId];

  await user.save();
  res.json(user.bookmarks);
};

export const applyJob = async (req, res) => {
  const { jobId } = req.body;

  await User.findByIdAndUpdate(req.userId, {
    $push: { appliedJobs: { jobId, appliedAt: new Date() } }
  });

  res.json({ success: true });
};
