import mongoose from "mongoose";

//Schema make it so each post will consist of a:
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type:Date,
        default: new Date ()

    },
});

//Turning the schema into a model and exporting it:
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;