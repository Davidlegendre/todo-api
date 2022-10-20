require("dotenv").config();
import express from "express";
import cors from 'cors';

import authRoutes from './auth/routes/auth.routes'
import userRoutes from './auth/routes/user.routes'
import todosRoutes from './todos/routes/index.routes'


const app = express();

app.use(express.json())
app.use(cors())
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/todos",todosRoutes)

app.get("/healthcheck", (_, res) => res.sendStatus(200));

export default app