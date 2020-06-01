const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();


app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/reg', require('./routes/api/reg'))
app.use('/api/home', require('./routes/api/home'))
app.use('/api/post', require('./routes/api/post'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));