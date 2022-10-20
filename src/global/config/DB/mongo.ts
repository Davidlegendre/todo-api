import mongoose from "mongoose";
import localConfig from '../default';
import log from '../../utils/logger';


async function mongoConnect() {
  try {
    await mongoose.connect(localConfig().dbUri)
    log.info("Contectado a DB")
  } catch (error) {
    process.exit(1)
  }
}

export default mongoConnect;