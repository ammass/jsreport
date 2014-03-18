﻿module.exports = {
     cookieSession: {
        key: 'jsreport.sid',
        secret: 'dasd321as56d1sd5s61vdv32',
        cookie: { domain: 'playground.jsreport.net' }
    },
    iisnode: true,
    connectionString: { name: "mongoDB", address: "localhost", port: 27017 },
    extensions: ["express", "templates", "html", "phantom-pdf", "fop-pdf", "scripts", "data", "images", "examples"],
    mode: "playground",
    port: process.env.PORT,
}