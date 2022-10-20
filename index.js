import mongoConnect from "./global/config/DB/mongo";
import app from './app'
import localConfig from "./global/config/default";
import log from './global/utils/logger';
const port = localConfig().port
app.listen(port, () => {
    log(`server on port http://localhost:${port}`, false)
    log('Connecting to DB, please wait', false)
    mongoConnect()
})