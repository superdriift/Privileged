const { User } = require("../models");
db = require('../config/connection')

const seedUsers = async () => {
    await User.deleteMany();
    await User.insertMany(
    {
        firstName: "Developer",
        lastName: "One",
        email: "jklongmire@gmail.com",
        password: "password12345",
        admin: true
    },
    {
        firstName: "Tester",
        lastName: "One",
        email: "thekingjulian@gmail.com",
        password: "password12345",
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    }
    );
    console.log(' ---------- Users Seeded ---------- ');
    process.exit();
}

module.exports = seedUsers;