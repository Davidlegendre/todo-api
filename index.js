import mongoConnect from "./dist/global/config/DB/mongo";
import app from './dist/appdist'
import localConfig from "./dist/global/config/default";
import log from './dist/global/utils/logger';
const port = localConfig().port
app.listen(port, () => {
    log(`server on port http://localhost:${port}`, false)
    log('Connecting to DB, please wait', false)
    mongoConnect()
})