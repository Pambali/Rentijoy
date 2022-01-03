'use strict';
const {
    DataTypes
} = require('sequelize');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.movieCast = require("./movieCast")(sequelize, DataTypes);
db.movie = require("./movie")(sequelize, DataTypes)
db.payment = require("./payment")(sequelize, DataTypes)
db.user = require("./user")(sequelize, DataTypes)
db.userMovies = require("./userMovies")(sequelize, DataTypes)
db.sequelize.sync({force:false})
    .then(() => {
        console.log('yes re-sync done!')
    })
    .catch(e => console.log(e));

db.movie.hasOne(db.movieCast, {
    foreignKey: "MovieId"
})
db.movieCast.belongsTo(db.movie,{
  foreignKey:"MovieId"
})
db.user.hasMany(db.payment,{
  foreignKey:"userId"
})
db.payment.belongsTo(db.user,{
  foreignKey:"userId"
})
// db.userMovies.hasOne(db.payment, {
//     foreignKey: "userMovieId"
// })
db.user.belongsToMany(db.movie, {
    through: db.userMovies,
    as: "movie",
    foreignKey: "userId"
});


db.movie.belongsToMany(db.user, {
    through: db.userMovies,
    as: "user",
    foreignKey: "MovieId"
})

module.exports = db;