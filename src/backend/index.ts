import express from 'express';
import { Application, Request, Response } from 'express';

const PORT = 8080;
const app:Application = express();
app.use(express.static('./dist/frontend'));

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>TypeScript Greeter</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
