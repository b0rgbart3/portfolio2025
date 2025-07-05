const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/nodemail', (req, res) => {
  console.log('Received body:', req.body);
  res.send('OK');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



