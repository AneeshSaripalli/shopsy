import env from "./conf/env";
import app from "./express";
import { init_routes } from "./express/protobufs";
import test_service from "./express/protobufs/test_service";

app.use((req, res, next) => {
    console.log(req.url)
    next();
})
init_routes(app, [["/protobuf/test", test_service]])

app.listen(env.SERVER_PORT, () => {
    console.log("Server is listening on", env.SERVER_PORT);
});