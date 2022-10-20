import mongoConnect from "./global/config/DB/mongo";
import localConfig from "./global/config/default";
import log from './global/utils/logger';
const port = localConfig().port
app.listen(port, () => {
    log.info(`server on port http://localhost:${port}`)
    log.info('Connecting to DB, please wait')
    mongoConnect()
})