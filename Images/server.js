const express = require('express');
const app = express();

app.use(express.static('public')); // Assuming your files are in a 'public' directory

app.listen(5500, () => {
    console.log('Server is running on port 5500');
});
