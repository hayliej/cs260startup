const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetResults
apiRouter.get('/results', async (_req, res) => {
  const results = await DB.getResults();
  res.send(results);
});

// SubmitResult
apiRouter.post('/result', async (req, res) => {
  DB.addResult(req.body);
  const results = await DB.getResults();
  res.send(results);
  //results.push(req.body);
});

//results = [];

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});