const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Express Frontend Working!');
});

app.listen(PORT, () => console.log(`Frontend running on http://localhost:${PORT}`));
