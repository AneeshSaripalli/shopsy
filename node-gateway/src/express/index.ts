import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
console.log("Configuring CORS on API gateway.");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req: express.Request, res: express.Response) => {
    res.send("PONG");
});

export default app;