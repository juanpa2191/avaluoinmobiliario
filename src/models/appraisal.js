import mongoose from 'mongoose';

const appraisalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    enum: ['residential', 'commercial', 'industrial', 'land'],
    required: true
  },
  landArea: {
    type: Number,
    required: true,
    min: 0
  },
  builtArea: {
    type: Number,
    required: true,
    min: 0
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware para actualizar updatedAt antes de cada actualización
appraisalSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Appraisal = mongoose.models.Appraisal || mongoose.model('Appraisal', appraisalSchema);

export default Appraisal;
