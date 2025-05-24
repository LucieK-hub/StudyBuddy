const express = require('express');
const app = express();
const port = 3000;
const methodRoutes = require('./routes/methodRoutes');
const goalRoutes = require('./routes/goalRoutes');
const timerRoutes = require('./routes/timerRoutes');


app.use(express.json());
app.use(methodRoutes);
app.use(goalRoutes);
app.use(timerRoutes);


app.get('/', (req, res) => {
    res.send("Studybuddy working")
})


app.listen(port, () => {
    console.log(`StudyBuddy backend running at http://localhost:${port}`)
})

