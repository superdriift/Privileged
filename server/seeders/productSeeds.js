const { Product } = require('../models');
db = require('../config/connection');
import jbrn from '../images/jbrn.jpeg';
import jhprn from '../images/jhprn.jpeg';
import jfdrn from '../images/jfdrn.jpeg';
import jmrn from '../images/jmrn.jpeg';
import jddc from '../images/jddc.jpeg';


const seedProducts = async () => {
    await Product.deleteMany();
    await Product.insertMany([
        {
            name: 'Jade Bear Rope Necklace',
            description: 'Jade. Teddy Bear Rope Necklace. Hand carved. Green.',
            image: jbrn,
            price: 75,
            category: ['Necklaces', 'Jade']
        },
        {
            name: 'Jade Hog/Pig Rope Necklace',
            description: 'Jade. Hog/Pig Rope Necklace. Hand carved. {<br/>} The pig is a sociable, peace-loving creature that\'s patient and thoughtful.',
            image: jhprn,
            price: 75,
            category: ['Necklaces', 'Jade']
        },
        {
            name: 'Jade Foo Dog Rope Necklace',
            description: 'Jade. Foo Dog Rope Necklace with good luck coin underneath. Adjustable. Hand carved. 4.63g in weight. .75in. Height, .4in length and .4in width.',
            image: jfdrn,
            price: 75,
            category: ['Necklaces', 'Jade']
        },
        {
            name: 'Jade Mermaid Rope Necklace',
            description: 'Jade. Mermaid Rope Necklace. White with hints of green. 2.25in height, 1.4in length and .06in width. Hand carved. 19.55g in weight.',
            image: jmrn,
            price: 75,
            category: ['Necklaces', 'Jade']
        },
        {
            name: 'Jade Dragon Decorative Comb',
            description: 'Jade. Dragon Decorative Comb. Green. Hand carved. 43.81g in weight. 3.5in length, 1.75in height and .12in width.',
            image: jddc,
            price: 75,
            category: ['Jade']
        }
    ]);

    console.log(' ---------- Products Seeded ---------- ');
    process.exit();
}

module.exports = seedProducts