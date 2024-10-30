import mongoose from 'mongoose';
const chatSchema = mongoose.Schema(
  {
    chatName: {
      type: String,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  },
  {
    timestamps: true,
  }
);
const chatModel = mongoose.model('Chat', chatSchema);
export default chatModel;
