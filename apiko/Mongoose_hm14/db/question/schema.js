const QuestionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true},
  description: { type: String, required: true, lowercase: true, trim: true},
  tags: [type: String],
  createdAt: { type: Date, default: new Date() },
  createdById: UserSchema
 })
