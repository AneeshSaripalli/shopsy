import app from "./express";
import env from "./conf/env";

import { api } from "@aneeshsaripalli/protos";

app.listen(env.SERVER_PORT, () => {
    console.log("Server is listening on", env.SERVER_PORT);
});