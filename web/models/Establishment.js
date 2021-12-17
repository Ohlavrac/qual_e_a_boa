const db = require("./db");

const Establishment = db.sequelize.define("establishments", {
    owner_name: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    establishment_name: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    bio: {
        type: db.Sequelize.TEXT
    },
    url_image: {
        type: db.Sequelize.STRING
    },
    street: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    neighborhood: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    number: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    city: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    account_type: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
});

//Establishment.sync({force: true});

module.exports = Establishment;