module.exports = function(app){
    const feed = require('./feedController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1. 피드 생성 API
    app.post('/app/feeds', 
        feed.postFeed
    );

    app.get('/app/feeds', feed.getFeeds);

    // 3. 피드 수정 API
    app.patch('/app/feeds/:feedId/:userId', /*jwtMiddleware,*/ feed.patchFeeds);

};

