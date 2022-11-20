const jwtMiddleware = require("../../../config/jwtMiddleware");
const feedProvider = require("../Feed/feedProvider");
const feedService = require("../Feed/feedService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

//const regexEmail = require("regex-email");
const {emit} = require("nodemon");

exports.postFeed = async function (req, res) {

    const {content, imageUrl} = req.body;

    // 빈 값 체크
    if(!content)
        return res.send(response(baseResponse.FEED_CONTENT_EMPTY));

    const createFeed = await feedService.createFeed(
        content,
        imageUrl
    );

    return res.send(createFeed);

};

exports.patchFeeds = async function (req, res) {

// jwt - userId, path variable :feedId, userId

    //const userIdFromJWT = req.verifiedToken.userId

    const userId = req.params.userId;
    const feedId = req.params.feedId;
    const content = req.body.content;

    //if (userIdFromJWT != userId) {
    //    res.send(errResponse(baseResponse.USER_ID_NOT_MATCH));
    //} else {
        if (!feedId) return res.send(errResponse(baseResponse.FEED_FEEDID_EMPTY));

        if (!content) return res.send(errResponse(baseResponse.FEED_CONTENT_EMPTY));
        
        const editFeed = await feedService.editFeed(userId, feedId, content)
        return res.send(editFeed);
    //}
};

