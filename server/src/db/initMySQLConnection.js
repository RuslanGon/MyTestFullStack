import mysql from 'mysql2/promise';

export const initMySQLConnection = async () => {
const url = 'mysql://root:0637544749@127.0.0.1:3306/example';

try {
const connection = await mysql.createConnection(url);
console.log('MySQL connected');
return connection;
} catch (error) {
console.error('MySQL connection error:', error);
throw error;
}
};
