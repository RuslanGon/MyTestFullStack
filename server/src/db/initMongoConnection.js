import mongoose from "mongoose";
import {env} from '../utils/env.js';
import { ENV_VARS } from "../constants/index.js";

export const initMongoConnection = async () => {
const connectionLinck = `mongodb+srv://${env(ENV_VARS.DB_USER)}:${env(ENV_VARS.DB_PASSWORD)}@cluster0.lc6ql.mongodb.net/${env(ENV_VARS.DB_NAME)}?retryWrites=true&w=majority&appName=Cluster0`;
try {
await mongoose.connect(connectionLinck);
console.log('MongoDB connected');
} catch (error) {
console.log(error);
throw error;
}
};
