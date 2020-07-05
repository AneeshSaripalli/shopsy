import dotenv from "dotenv";
dotenv.config();

const is_production = process.env.NODE_ENV === 'production';

type Env = {
    SERVER_PORT: number,
    KAFKA_URL: string,
    KAFKA_PORT: number
};

export { Env };

const prod_env: Env = {
    KAFKA_URL: "kafka",
    KAFKA_PORT: 9092,
    SERVER_PORT: 8000
};

const dev_env: Env = {
    KAFKA_URL: "kafka",
    KAFKA_PORT: 9092,
    SERVER_PORT: 8000
}

const env: Env = (is_production) ? prod_env : dev_env;

export default env;