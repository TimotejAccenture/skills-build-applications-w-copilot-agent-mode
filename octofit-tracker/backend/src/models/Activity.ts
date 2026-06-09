import mongoose from 'mongoose'

interface IActivity {
  userId: mongoose.Types.ObjectId
  type: string
  duration: number
  distance?: number
  calories?: number
  date: Date
}

const activitySchema = new mongoose.Schema<IActivity>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['running', 'cycling', 'swimming', 'walking', 'gym', 'yoga'],
  },
  duration: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number,
  },
  calories: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

export const Activity = mongoose.model<IActivity>('Activity', activitySchema)
