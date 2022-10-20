import dayjs from "dayjs";

const log = (msn: string) => {
    const date = `${dayjs().format()}`;
    console.log(`[${date}] ` + msn)
}
export default log