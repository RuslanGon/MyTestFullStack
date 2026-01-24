import { initMongoConnection } from "./db/initMongoConnection.js";
// import { initMySQLConnection } from "./db/initMySQLConnection.js";
import { startServer } from "./server.js";

(async() => {
await initMongoConnection();
// await initMySQLConnection();;
startServer();
})();


