import express, { Request, Response } from 'express';
import path from "path";
import { renderCdkCard } from './cards/cdk-card';

const app = express();
const port = process.env.PORT || 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "image/svg+xml");
  return res.send(renderCdkCard({ username: 'kaizencc'}));
});

app.get('/api', (req: Request, res: Response) => {
  const {
    username,
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  return res.send(renderCdkCard({ username: username.toString()}));
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${ port }`);
});
