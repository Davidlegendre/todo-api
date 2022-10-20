import mongoConnect from "./src/global/config/DB/mongo";
import app from './src/app'
import localConfig from "./src/global/config/default";
import log from './src/global/utils/logger';
const port = localConfig().port
app.listen(port, () => {
    log(`server on port http://localhost:${port}`, false)
    log('Connecting to DB, please wait', false)
    mongoConnect()
})