const jwtMiddleware = require("../../../config/jwtMiddleware");
const commentProvider = require("../../app/Comment/commentProvider");
const commentService = require("../../app/Comment/commentService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

//const regexEmail = require("regex-email");
const {emit} = require("nodemon");


exports.postComment = async function (req, res) {
    
    //댓글 생성
    const {parent_comment, content, feedId} = req.body;

    //빈 값 체크
    if (!content)
        return res.send(response(baseResponse.COMMENT_CONTENT_EMPTY));

    if (!feedId)
        return res.send(response(baseResponse.COMMENT_FEEDID_ENPTY));

    const createComment = await commentService.createComment(
        parent_comment,
        content,
        feedId
    );

    return res.send(createComment);
       
};

exports.getComment = async function (req, res) {

    /**
     * Query String: userId
     */
    const userId = req.query.userId;

    if (!userId) {
        // 댓글 전체 조회
        const commentListResult = await commentProvider.retrieveCommentList();
        return res.send(response(baseResponse.SUCCESS, commentListResult));
    } else {
        // 특정 유저 댓글 검색 조회
        const commentListByUserId = await commentProvider.retrieveCommentList();
        return res.send(response(baseResponse.SUCCESS, commentListByUserId));
    }
};