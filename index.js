import mongoConnect from "./dist/global/config/DB/mongo";
import app from './dist/app'
import localConfig from "./dist/global/config/default";
import log from './dist/global/utils/logger';
const port = localConfig().port
app.listen(port, () => {
    log.info(`server on port http://localhost:${port}`)
    log.info('Connecting to DB, please wait')
    mongoConnect()
})