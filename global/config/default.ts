import IConfigServer from './interfaces/config.interface';

export default function localConfig(): IConfigServer{
    return {
        port: process.env.PORT,
        dbUri: process.env.MONGODB_URI,
        ACCESS_TOKEN_PUBLIC_KEY: process.env.ACCESS_TOKEN_PUBLIC_KEY,
        ACCESS_TOKEN_PRIVATE_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY,
        REFRESH_PRIVATE_KEY: process.env.REFRESH_PRIVATE_KEY,
        REFRESH_PUBLIC_KEY: process.env.REFRESH_PUBLIC_KEY
    }
}