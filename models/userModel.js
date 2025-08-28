const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    content: String,
    
    username: String,
    createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const blogModule = mongoose.model("blogModule", blogSchema);
module.exports = blogModule;





