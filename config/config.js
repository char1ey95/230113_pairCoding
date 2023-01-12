require("dotenv").config()

const host = process.env.DB_HOST || "localhost"
const port = process.env.DB_PORT || 3306
const user = process.env.DB_USER || ""
const password = process.env.DB_PASSWORD || ""
const database = process.env.DB_DATABASE || "test"

const config = {
    env: process.env.NODE_ENV || "test",
    port: process.env.PORT || 3000,
    db:{
        test:{
            host,
            port,
            username:user,
            password,
            database,
            dialect:"mysql",
        }
    }
}

module.exports = config