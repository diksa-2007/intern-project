const express = require('express');

const app = express();

const logger = require('./middleware/logger');

const studentRoutes = require('./routes/studentRoutes');

const PORT = 3000;


app.use(express.json());


// Middleware
app.use(logger);


// Routes
app.use('/', studentRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});