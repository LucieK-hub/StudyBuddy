const express = require('express');
const app = express();
const port = 3000;
const methodRoutes = require('./routes/methodRoutes');
const goalRoutes = require('./routes/goalRoutes');

app.use(express.json());
app.use(methodRoutes);
//app.use(goalRoutes);


app.get('/', (req, res) => {
    res.send('Hello World! Ready to start?')
})


app.listen(port, () => {
    console.log(`StudyBuddy backend running at http://localhost:${port}`)
})

