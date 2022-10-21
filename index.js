import mongoConnect from "./public/global/config/DB/mongo";
import app from './public/app'
import localConfig from "./public/global/config/default";
import log from './public/global/utils/logger';
const port = localConfig().port
app.listen(port, () => {
    log(`server on port http://localhost:${port}`, false)
    log('Connecting to DB, please wait', false)
    mongoConnect()
})