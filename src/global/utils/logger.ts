import logger from "pino";
import dayjs from "dayjs";
import localConfig from '../config/default';

const log = logger({
    transport: {
        target: "pino-pretty"
    },
    level: localConfig().logLevel,
    base: {
        pid: false,
    },
    timestamp: () => `, "time":"${dayjs().format()}"`
})

export default log