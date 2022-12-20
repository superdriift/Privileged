const db = require('./connection');
const { Category, Product, User } = require('../models');
// const categoryData = require('./categoryData.json')

db.once('open', async () => {

  await Category.deleteMany();
  
  const categories =  await Category.insertMany([
    { name: "Necklace" },
    { name: "Ring" },
    { name: "Pendant" },
    { name: "Household" }
  ])

  await Product.deleteMany();

  await Product.insertMany([
    {
        name: "Jade Bear Rope Necklace",
        description: "Jade. Teddy Bear Rope Necklace. Hand carved. Green.",
        image: "jbrn.jpeg",
        price: 75.00,
        quantity: 100,
        category: categories[0]._id
    },
    {
        name: "Jade Hog / Pig Rope Necklace",
        description: "Jade. Hog/Pig Rope Necklace. Hand carved. <br/> The pig is a sociable, peace-loving creature that’s patient and thoughtful.",
        image: "jhprn.jpeg",
        price: 75.00,
        quantity: 100,
        category: categories[0]._id
    },
    {
        name: "Jade Foo Dog Rope Necklace",
        description: "Jade. Foo Dog Rope Necklace with good luck coin underneath. Adjustable. Hand carved. 4.63g in weight. .75in. Height, .4in length and .4in width.",
        image: "jfdrn.jpeg",
        price: 75.00,
        quantity: 100,
        category: categories[0]._id
    },
    {
        name: "Jade Mermaid Rope Necklace",
        description:"Jade. Mermaid Rope Necklace. White with hints of green. 2.25in height, 1.4in length and .06in width. Hand carved. 19.55g in weight.",
        image: "jmrn.jpeg",
        price: 75.00,
        quantity: 100,
        category: categories[0]._id,
    },
    {
        name: "Jade Dragon Decorative Comb",
        description: "Jade. Dragon Decorative Comb. Green. Hand carved. 43.81g in weight. 3.5in length, 1.75in height and .12in width.",
        image: "jddc.jpeg",
        price: 300.00,
        quantity: 100,
        category: categories[3]._id
    },
    {
        name: "Jade 2-Piece Dragon Rope Necklace Set",
        description: "Jade. 2-piece Dragon Rope Necklace Set. Adjustable. Green. 23g Total weight (11.5g each). Each is 1in length, 2in height and .06in width. Hand carved.",
        image: "j2pdrn.jpeg",
        price: 125.00,
        quantity: 100,
        category: categories[0]._id, 
    }
]);

  console.log('all done!');
  process.exit(0);
});
