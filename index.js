import mongoConnect from "./vercel/output/global/config/DB/mongo";
import app from './dist/app'
import localConfig from "./vercel/output/global/config/default";
import log from './vercel/output/global/utils/logger';
const port = localConfig().port
app.listen(port, () => {
    log(`server on port http://localhost:${port}`, false)
    log('Connecting to DB, please wait', false)
    mongoConnect()
})