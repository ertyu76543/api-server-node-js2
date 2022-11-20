const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
//const secret_config = require("../../../config/secret");
const commentProvider = require("./commentProvider");
const commentDao = require("./commentDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {connect} = require("http2");

exports.createComment = async function (parent_comment, content, feedId){
    try {

        if (!parent_comment) {
            insertCommentFeedParams = [content, feedId];

            const connection = await pool.getConnection(async (conn) => conn);

            const commentFeedResult = await commentDao.insertCommentFeed(connection, insertCommentFeedParams);
            connection.release();
            return response(baseResponse.SUCCESS);
        } else  {
            insertCommentcmtParams = [parent_comment, content, feedId];

            const connection = await pool.getConnection(async (conn) => conn);

            const commentcomtResult = await commentDao.insertCommentcmt(connection, insertCommentcmtParams)
            connection.release();
            return response(baseResponse.SUCCESS);
        }

    } catch (err) {
        logger.error(`App - createUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};