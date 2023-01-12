module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 0. 테스트 API
    //app.get('/app/test', user.getTest)

    // 1. 유저 생성 (회원가입) API
    app.post('/app/users', user.postUsers);

    // 2. 유저 조회 API (+ 검색)
    app.get('/app/users',user.getUsers); 

    // 3. 특정 유저 조회 API
    app.get('/app/users/:userId', user.getUserById);


    // TODO: After 로그인 인증 방법 (JWT)
    // 로그인 하기 API (JWT 생성)
    app.post('/app/login', user.login);

    // 회원 정보 수정 API (JWT 검증 및 Validation - 메소드 체이닝 방식으로 jwtMiddleware 사용)
    app.patch('/app/users/:userId', jwtMiddleware, user.patchUsers)

    app.delete('/app/users/:userId', jwtMiddleware, user.deleteUsers)

    //카카오 로그인 API
    app.get('/app/kakao',passport.authenticate('kakao'));

    app.get(
        '/kakao/callback',
        //passport 로그인 전략에 의해 kakaoStrategy로 가서 카카오계정 정보와 DB를 비교해서 회원가입하거나 로그인 처리
        passport.authenticate('kakao', {
            failureRedirect:'/',
        }),
        (req, res) => {
            res.resdirect('/');
        },
    )

};



// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
    //app.get('/app/auto-login', jwtMiddleware, user.check);

// TODO: 탈퇴하기 API