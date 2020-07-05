import express from "express";

const app = express();
app.get("/ping", (req: express.Request, res: express.Response) => {
    res.send("PONG");
});

export default app;