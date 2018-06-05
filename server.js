const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/topics', require('./routes/topic'));

app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
