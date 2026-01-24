import { initMongoConnection } from "./db/initMongoConnection.js";
import { Student } from "./db/models/student.js";
// import { initMySQLConnection } from "./db/initMySQLConnection.js";
import { startServer } from "./server.js";

(async() => {
await initMongoConnection();
const students = await Student.find({});
console.log(students);
// await initMySQLConnection();;
startServer();
})();


