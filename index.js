const helmet = require("helmet");

exports.response_headers = {
    init: function(app) {
        app.use(
            helmet.contentSecurityPolicy({
                useDefaults: true,
                directives: {
                    "default-src": ["'self'", process.env.BASE_SERVER_URL],
                    "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdnjs.cloudflare.com"],
                    "style-src": ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
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