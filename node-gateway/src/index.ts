import app from "./express";
import env from "./conf/env";

app.listen(env.SERVER_PORT, () => {
    console.log("Server is listening");
});