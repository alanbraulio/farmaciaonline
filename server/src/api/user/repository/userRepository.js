const { getConnection } = require('../../shared/dbConnection');
const sql = require('mssql');

const SQL_SELECT_QUERY = `SELECT id, name, email, password, cargo, active FROM Users`;

exports.get_all_users = async () => {
    try{
        const dbClient = await getConnection();
        const request = dbClient.request();

        const result = await request.query(SQL_SELECT_QUERY);
        return result.recordsets[0];

    } catch(error) {
        console.log(error);
        return null;
    }
}
