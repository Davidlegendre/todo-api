require("dotenv").config();
import express from "express";
import cors from 'cors';
import localConfig from "./global/config/default";
import authRoutes from './auth/routes/auth.routes'
import userRoutes from './auth/routes/user.routes'
import todosRoutes from './todos/routes/index.routes'
import mongoConnect from "./global/config/DB/mongo";
import log from './global/utils/logger';

const app = express();

app.use(express.json())
app.use(cors())
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/todos",todosRoutes)

app.get("/healthcheck", (_, res) => res.sendStatus(200));
const port = localConfig().port
app.listen(port, () => {
    log.info(`server on port http://localhost:${port}`)
    log.info('Connecting to DB, please wait')
    mongoConnect()
})