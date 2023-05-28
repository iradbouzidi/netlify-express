const express = __non_webpack_require__('express');
const serverless = __non_webpack_require__('serverless-http');
const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.send("Running...")
});

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
