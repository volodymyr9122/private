const UserSchema = new Schema({
  username: { type: String, required: true, lowercase: true, trim: true, minlength: 5 },
  email: { type: String, required: true},
  profile: UserProfileSchema,
  services: { type: UserServicesSchema },
  _id: mongoose.Schema.Types.ObjectId,
});
