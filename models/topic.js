const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Topic', TopicSchema);
