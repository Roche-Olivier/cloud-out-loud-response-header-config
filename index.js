const helmet = require("helmet");

exports.response_headers = {
    init: function(app) {
        app.use(
            helmet.contentSecurityPolicy({
                useDefaults: true,
                directives: {
                    "default-src": ["'self'", process.env.BASE_SERVER_URL,process.env.API_URL_HELMET_PATH],
                    "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", process.env.UI_PACKAGE_PROVIDER_PATH],
                    "style-src": ["'self'", "'unsafe-inline'",  process.env.UI_PACKAGE_PROVIDER_PATH],
                    "script-src-attr": ["'self'", "'unsafe-inline'"]
                },
            }),
            helmet.hsts({
                maxAge: 1000 * 60 * 60 * 24 * 365,
                includeSubDomains: true,
                preload: true,
            })
        )
    },

}