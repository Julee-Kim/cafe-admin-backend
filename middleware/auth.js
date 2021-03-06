// 인증 처리
const { Staff } = require('../models/Staff');

let auth = (req, res, next) => {
	// 클라이언트 쿠키에서 토큰을 가져옴
	const token = req.cookies.authToken;

	// 토큰 복호화하여 유저 찾기
	Staff.findByToken(token, (err, staff) => {
    if (err) throw err;
    if (!staff)
		return res.json({
			success: false, errorCode: 'check-login', message: '로그인이 필요한 서비스입니다.'
		});

		req.token = token;
		req.staff = staff;
    next();
  });
}

module.exports = { auth };