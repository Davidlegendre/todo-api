import mongoose from "mongoose";
import localConfig from '../default';
import log from '../../utils/logger';


async function mongoConnect() {
  try {
    await mongoose.connect(localConfig().dbUri)
    log("Contectado a DB", false)
  } catch (error) {
    process.exit(1)
  }
}

export default mongoConnect;