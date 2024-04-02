import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

full_server/routes/index.js
app.use('/', routes);

export default app;

filename at execution
const databaseFilename = process.argv[2];

if (!databaseFilename) {
  console.error('Error: Database filename not provided.');
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
