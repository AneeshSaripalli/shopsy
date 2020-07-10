import { api } from "@aneeshsaripalli/protos";
import { ProtoRequestHandler } from ".";


const test_service: ProtoRequestHandler<api.ITestRequest, api.ITestResponse> = async (request: api.ITestRequest): Promise<api.ITestResponse> => {
    const person = {
        email: "aneeshsaripalli.com",
        id: 1234,
        name: "Aneesh Saripalli"
    };

    return {
        person
    }
};

export default test_service;