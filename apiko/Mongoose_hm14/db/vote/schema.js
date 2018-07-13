const QuestionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  isPositive: Boolean,
  createdAt: { type: Date, default: new Date() },
  answerId: AnswerSchema,
  createdById: UserSchema
 })
