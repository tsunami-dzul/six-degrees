import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  friends: {
    type: [String],
    default: [],
  },
});

userSchema.method('toJSON', function (this: any) {
  const { __v, ...object } = this.toObject();

  object.id = object._id;
  delete object._id;

  return object;
});

export = model('User', userSchema);
