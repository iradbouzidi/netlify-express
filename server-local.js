'use strict';
const app = require('./express/server');

// Local request handlers.
app.get('/', (req, res) => {
    res.send('Hello World!')
});


// Start Server.
let port = 3000;
app.listen(port, function () {
    console.log(`Server started on port ${port}...`);
});