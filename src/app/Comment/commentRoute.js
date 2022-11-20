module.exports = function(app){
    const comment = require('./commentController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1. 댓글 생성 API
    app.post('/app/comments',
        comment.postComment
    );

    // 2. 댓글 조회 API
    app.get('/app/comments', 
        comment.getComment
    ); 


};

