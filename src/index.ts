import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log(outputReq(req));

  const html = `
    <html>
        <body>
            <h1>NOTHING TO SEE HERE.</h1>
        </body>
    </html>`;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

app.post("/", (req: Request, res: Response) => {
  outputReq(req);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(`{
		"status":"OK"
	}`);
});

app.listen(port, () => {
  console.log(`[server]: Server running at http://localhost:${port}`);
});

const outputReq = (req: Request) => {
  console.log(`${req.method} - ${req.protocol}://${req.headers.host}`);
  console.log('headers:');
  console.log(req.headers);

  console.log(`body: `)
  console.log(req.body);
};
