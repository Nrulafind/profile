const express = require('express');
const app = express();
const path = require('path');

// static files in the public directory
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
