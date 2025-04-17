const express = require('express');
const app = express();

app.get('/assistant/greet', (req, res) => {
  const name = req.query.name || 'Guest';

  const day = new Date().getDay();
  let dayMessage = "Have a wonderful day!";

  switch (day) {
    case 1:
      dayMessage = "Happy Monday! Start your week with energy!";
      break;
    case 5:
      dayMessage = "It's Friday! The weekend is near!";
      break;
  }

  res.json({
    welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
    dayMessage: dayMessage
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
