const AnswerSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: { type: String, required: true, lowercase: true, trim: true},
  title: { type: String, required: true},
  questionId: QuestionSchema,
  createdAt: { type: Date, default: new Date() },
  createdById: UserSchema
 })
