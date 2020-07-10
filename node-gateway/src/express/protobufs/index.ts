import { Application } from "express";
import * as $protobuf from "protobufjs";
import { api } from "@aneeshsaripalli/protos";


export type ProtoRequestHandler<IReqType, IRespType> = (req: IReqType) => Promise<IRespType>;

export type RouteMap = [
    [string, ProtoRequestHandler<any, any>]
];

export const init_routes = (app: Application, map: RouteMap) => {
    for (const handler of map) {
        console.log("Init-ing handler for", handler[0]);

        app.post(handler[0], async (request, response) => {
            console.log("Got cb at", handler[0]);
            const resp = await handler[1](request.body);
            console.log("Response", resp)
            console.log("Encode", api.TestResponse.encode(resp).finish())
            response.send(api.TestResponse.encode(resp).finish().toString());
        });
    }
}