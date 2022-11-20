const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const commentDao = require("./commentDao");

exports.retrieveCommentList = async function (userId) {
    if (!userId) {
        const connection = await pool.getConnection(async (conn) => conn);
        const commentListResult = await commentDao.selectComment(connection);
        connection.release();

        return commentListResult;

    } else {
        const connection = await pool.getConnection(async (conn) => conn);
        const commentListResult = await commentDao.selectCommentUserId(connection, userId);
        connection.release();

        return commentListResult;
    }
}