/**
 * discussion model
 */
const mongoose = require("mongoose");

const discussionSchema = mongoose.Schema({
  forum: { type: mongoose.Schema.ObjectId, ref: "forum" },
  discussion_slug: String,
  user_id: mongoose.Schema.ObjectId,
  user: { type: mongoose.Schema.ObjectId, ref: "user" },
  date: Date,
  title: String,
  content: Object,
  contentSnipet: Object,
  subject: { type: String, required: true },
  stream: [{ type: String, required: true }],
  college: [String],
  favorites: Array,
  tags: Array,
  pinned: Boolean
});

module.exports = mongoose.model("discussion", discussionSchema);
