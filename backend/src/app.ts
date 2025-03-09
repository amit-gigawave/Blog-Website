import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

app.post("/hi", (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({
    status: "ok",
    message: `Hello ${name}`,
  });
});


export default app;