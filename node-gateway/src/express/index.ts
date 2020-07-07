import express from "express";
import cors from "cors";

const app = express();
console.log("Configuring CORS on API gateway.");
app.use(cors());

app.get("/ping", (req: express.Request, res: express.Response) => {
    res.send("PONG");
});

export default app;