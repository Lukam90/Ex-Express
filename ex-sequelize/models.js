const dbConfig = require("./config/dbConfig")

const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            min: 0,
            max: 5,
            idle: 10000,
            acquire: 30000
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log("Connected...")
})
.catch(err => {
    console.log("Error: " + err)
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.products = require("./models/Product")(sequelize, DataTypes)
db.reviews = require("./models/Review")(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log("Re-sync done!")
})

module.exports = db