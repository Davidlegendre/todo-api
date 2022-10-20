import dayjs from "dayjs";

const log = (msn: string, isError: boolean) => {
  const date = `${dayjs().format()}`;
  if (!isError) console.log(`[${date}] ` + msn);
  else console.error(`[${date}] ` + msn);
};
export default log;
