module.exports = function(req, res, next) {
    const time = new Date();
    req.myGeneratedTime = time;
    next();
}