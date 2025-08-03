
function customLogger(loggerName)
{
    return function (req, res, next) {
        req.time = new Date();
        console.log('[customLogger]', loggerName, 'req ',req.url);
        next();
    }
}
module.exports = customLogger;