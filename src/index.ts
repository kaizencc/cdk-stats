import express, { Request, Response } from 'express';
import path from "path";

const app = express();
const port = process.env.PORT || 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (_req: Request, res: Response) => {
  // render the index template
  return res.sendFile(path.join(__dirname, '..', 'html', 'index.html'));
  // return res.send('Express Typescript on Vercel');
});

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓');
});

// start the express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${ port }`);
});