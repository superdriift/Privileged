const { Category } = require("../models");
db = require('../config/connection');

const seedCategories = async () => {
    await Category.deleteMany();
    await Category.insertMany([
        {
            name:'Necklace'
        },
        {
            name:'Bracelet'
        },
        {
            name:'Ring'
        },
        {
            name:'Jade'
        },
        {
            name:'Bear'
        },
        {
            name:'Octopus'
        },
        {
            name:'Wasp'
        },
        {
            name:'Tiger'
        },
        {
            name:'Spider'
        },
        {
            name:'Goose'
        },
        {
            name:'Turtle'
        },
        {
            name:'Deer'
        },
        {
            name:'Buddha'
        },
        {
            name:'Scorpion'
        }
    ]);

    console.log(' ---------- Categories Seeded ---------- ');
    process.exit();
}

module.exports = seedCategories;