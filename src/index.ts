import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  console.log("GET");
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
  console.log("POST");
  console.dir(req)
  
  ;

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(`{
		"status":"OK"
	}`);
});

app.listen(port, () => {
  console.log(`[server]: Server running at http://localhost:${port}`);
});

const outputReq = (req: Request) => {
  console.dir(req.body);
};
