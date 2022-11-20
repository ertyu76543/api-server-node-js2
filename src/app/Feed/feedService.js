const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
//const secret_config = require("../../../config/secret");
const feedProvider = require("./feedProvider");
const feedDao = require("./feedDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {connect} = require("http2");

exports.createFeed = async function (content, imageUrl) {
    try {

        insertFeedParams = [content, imageUrl];
        const connection = await pool.getConnection(async (conn) => conn);

        const FeedResult = await feedDao.insertFeed(connection, insertFeedParams);
        connection.release();
        return response(baseResponse.SUCCESS);
    } catch (err) {
        logger.error(`App - createUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }

};

exports.editFeed = async function (id, feedId, content) {
    try {
        console.log(id)
        const connection = await pool.getConnection(async (conn) => conn);
        const editFeedResult = await feedDao.updateFeed(connection, id, feedId, content)
        connection.release();

        return response(baseResponse.SUCCESS);
    } catch (err) {
        logger.error(`App - editUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};