
const healthCheck = (req, res) => {
    try {
        console.log("inside healthCheck : OK")
        res.json({
            data: {
                health: "OK"
            },
            error: null
        })

    } catch (e) {
        console.log("error in healthCheck api", e);
        res.status(400).json({
            error: e.message,
            data: null
        })
    }
}


const getAppConfig = (req, res) => {
    try {
        let data = req.body;
        if (data.filter == "version") {
            return res.json({
                data: {
                    "express": "^4.19.2",
                    "express-rate-limit": "^7.3.0",
                    "message": "versions"
                },
                error: null
            })
        }

        return res.json({
            data: {
                "message": "filter is incorrect"
            },
            error: null
        })

    } catch (error) {
        console.log("error in getAppConfig")
        res.status(400).json({
            error: error.message,
            data: null
        })
    }
}

module.exports = {
    healthCheck,
    getAppConfig
}