import axios from "axios";
import * as $protobuf from "protobufjs";


export type ProtoEncoder<T> = (t: T) => protobuf.Writer;
export type ProtoDecoder<T> = (buffer: Buffer) => T;

type Constructor<I> = new (...args: any[]) => I;

async function request_proto<IPayloadType, IResponseType>(path: string, payload: IPayloadType, decode: ProtoDecoder<IResponseType>): Promise<IResponseType> {
    const encode: ProtoEncoder<IPayloadType> = Object.getPrototypeOf(payload).constructor.encode;
    const { data } = await axios.post<Buffer>(path, encode(payload).finish());
    return decode(new Buffer(data));
}


export { request_proto };
