const db = require('./connection');
const { Category, Product, User } = require('../models');
// const categoryData = require('./categoryData.json')

db.once('open', async () => {

    await Category.deleteMany();

    const categories = await Category.insertMany([
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
            description: "Jade. Mermaid Rope Necklace. White with hints of green. 2.25in height, 1.4in length and .06in width. Hand carved. 19.55g in weight.",
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
        },
        {
            name: "Jade Barrel Silver Necklace",
            description: "Jade Barrel Silver pendant. Green and white. 5g in total weight. 20in sterling silver chain. Barrel: .5in length, .4in height ",
            image: "jbsn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Skull Ring",
            description: "Jade Skull Ring. Dark green. Size 11.5. 9g in weight. Hand carved. 1.25in length, 1.25in height and .5in width.",
            image: "jsr.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Jade Dragon Ring",
            description: "Jade. Dragon Ring. Green. Size 12.25. 16g in weight. Hand carved. 1.4in length, 1.5in height and .4in width.",
            image: "jdr.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Jade Dragon Sword Rope Necklace",
            description: "Jade. Dragon Sword Rope Necklace. Adjustable. 18g in weight. .75in length, 2.75in height and .25in width. Hand carved. Strength & Power",
            image: "jdsrn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Octopus Rope Necklace",
            description: "Jade. Octopus Rope Necklace. Adjustable. Hand carved. Green. 19g in weight. 1in length, 1.4in height and.5in width.",
            image: "jorn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Tiger Rope Necklace",
            description: "Jade. Tiger Rope Necklace. 14in total length. White and orange. Hand carved. Handmade sterling silver bail. Jade charm: 8g in weight. .5in length, 1in height and .25 width.",
            image: "jtrn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Wasp Rope Necklace",
            description: "Jade. Wasp Rope Necklace. Adjustable. Green. Hand carved. 6g in weight. .5in length, 1in height and .4in width.",
            image: "jwrn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Goose Rope Necklace",
            description: "Jade. Goose Rope Necklace. Hand carved. Green and white. 19g in weight. 1in length, 1.4in height and .5in width.",
            image: "jgrn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Foot with Spider Pendant",
            description: "Jade. Foot with Spider Pendant. Orange and white with hints of green. Hand carved. Handmade sterling silver bail. 36g in weight. 1in length, 1.75in height and .75in width. Good fortune and contentment.",
            image: "jfwsp.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Monkey Riding Horse Pendant",
            description: "Jade. Monkey on Horse Pendant. Gray and green. Hand carved. Handmade sterling silver bail. 37g in weight. 2in length, 2.25in height and .12in width.A monkey riding a horse symbolizes getting promoted quickly. A monkey riding on the back of another monkey symbolizes maintaining a high official standing from one generation to another.",
            image: "jmrhp.jpeg",
            price: 350.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Antique Tiger Decorative Cup",
            description: "Jade. Antique Tiger Decorative Cup. Dark green. Hand carved. 82g in weight. 2in length, 2.25in height and .5in width.",
            image: "jatdc.jpeg",
            price: 350.00,
            quantity: 100,
            category: categories[3]._id
        },
        {
            name: "Jade Antique Tiger Decorative Cup II",
            description: "Jade. Antique Tiger Decorative Cup. Dark green. Hand carved. 69g in weight. 2in length, 2in height and .5in width.",
            image: "jatdci.jpeg",
            price: 350.00,
            quantity: 100,
            category: categories[3]._id
        },
        {
            name: "Jade Dragon Turtle Pendant",
            description: "Jade Dragon Turtle Pendant. Green, white with some orange. Hand carved. Handmade sterling silver bail. 2in length, 1.23in height and .8in width. 35g in weight.Symbolizes courage, determination, fertility, longevity, power and success.",
            image: "jdtp.jpeg",
            price: 200.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Smiling Buddha Necklace",
            description: "Jade. Smiling Buddha Necklace. On rope with beads. White with lavender and green. 2.25in height, 2.25in length and .25in width. 51g in weight. ",
            image: "jsbn.jpeg",
            price: 125.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Snake Pendant",
            description: "Jade. Snake Pendant. Hand carved. Handmade sterling silver bail. Green. 1.25in length, 1.5in height and .12in width. 18g in weight. The snake is thought to be wise, sensual, enigmatic and deep thinking.",
            image: "jsp.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Rabbit & Pineapple Ring",
            description: "Jade. Rabbit and Pineapple Ring. Hand carved. Dark Green and white. 1.25in length, 1.3in height. 16g in weight. Size 11.5. The rabbit is known to be artistic, cautious, compassionate and self-assured.",
            image: "jsp.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Jade Rabbit & Pineapple Ring",
            description: "Jade. Rabbit and Pineapple Ring. Hand carved. Dark Green and white. 1.25in length, 1.3in height. 16g in weight. Size 11.5. The rabbit is known to be artistic, cautious, compassionate and self-assured.",
            image: "jrapr.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Jade Teddy Bear Pendant",
            description: "Jade. Teddy Bear. Green. Hand carved. Handmade sterling silver bail. 1.25in height, .75in length and .4in width. 10g in weight. A bear symbolizes bravery and strength, and is believed to be a good talisman against robbers.",
            image: "jtbp.jpeg",
            price: 150.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Crab With Coin Necklace",
            description: "Jade. Crab w/coin Necklace. On rope. Orange and green. Hand carved. 1.25in length, .75in height and .5in width. 21g in weight. A crab is said to represent an advantage in business, as well as prosperity and social status.",
            image: "jcwcn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Koi Fish Pendant",
            description: "Jade. Koi Fish Pendant. Hand carved. Handmade sterling silver bail. Orange and white with hints of green. 1.25in length, 1.75in height and .3in width. 26g in weight. Koi fish signify success and wealth.",
            image: "jkfp.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Turtle Ring",
            description: "Jade. Turtle Ring. Hand carved. Green and brown. 1.25in length, 1.25in height and .5in width. 14g in weight. Size 9.75. Turtles are protectors and generators of stability and longevity.",
            image: "jtr.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Jade Rose & Butterfly Pendant",
            description: "Jade. Rose and Butterfly Pendant. Hand carved. Handmade sterling silver bail. Green. 2in height, 1.5in length and .5in width. 52g in weight. The butterfly represents beauty, elegance and longevity.",
            image: "jrabp.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Deer Under Cherry Blossom",
            description: "Jade. Deer under Cherry Blossom. Dark Green. Hand carved. Handmade sterling silver bail 2in length, 2in height and .23in width. 41g in weight. A deer means good fortune and official salary, the graceful and beautiful deer is indicative of wealth.",
            image: "jducb.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Bull / Ox Pendant",
            description: "Jade. Bull/Ox Pendant. Hand carved. White with hints of dark gray. Handmade sterling silver bail. 1.6in height, 1.6in length and .25in width. 21g in weight. Its dependability and calm nature can be considered both strengths and weaknesses. The positive traits of the ox are modesty, logicalness and tenacity.",
            image: "jbop.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Turtle Necklace",
            description: "Jade. Turtle Necklace. On rope with beads. White, lavender and green. Hand carved. 2in height, 1in length and .5in width. 24g in weight. Turtles are protectors and generators of stability and longevity.",
            image: "jtn.jpeg",
            price: 125.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Snail Necklace",
            description: "Jade. Snail w/coin Necklace. On rope with jade bead. Orange and white. Hand carved.  1/2in length, 1.5in height and.5in width. 11g in weight.",
            image: "jsn.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Antique Decorative Water Bowl",
            description: "Jade. Antique Decorative Water Bowl. Green. 4in length, 2.5in width and .75in height. 155g in weight.",
            image: "jadwb.jpeg",
            price: 350.00,
            quantity: 100,
            category: categories[3]._id
        },
        {
            name: "Jade Pentagon With Dragons Pendant",
            description: "Jade. Pentagon w/Dragons Pendant. Lavender, green with hints of white. Handmade sterling silver bail. 2in length, 2.25in height and .22in width. 32g in weight. Represents good fortune, power and determination.",
            image: "jpwdp.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Deer Necklace",
            description: "Jade. Deer under cherry blossom w/bat necklace. On rope with jade beads. Green. 3.1in length, 1.75in height and .25in width. 38g in weight. A deer represents good fortune and official salary, the graceful and beautiful deer is indicative of wealth.A bat represents good luck, longevity and happiness.",
            image: "jdn.jpeg",
            price: 125.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Foot With Spider Pendant II",
            description: "Jade. Foot with Spider. White with a hint of green. Handmade sterling silver bail. 1in length, 1.5in height and .5in width. 22g in weight.",
            image: "jfwspi.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Lockbox Necklace",
            description: "Jade. Lockbox with coins. On rope. Green and red. .4in length, .6in height and .3in width. 4g in weight. ",
            image: "jln.jpeg",
            price: 75.00,
            quantity: 100,
            category: categories[0]._id
        },
        {
            name: "Jade Cicada Pendant",
            description: "Jade. Cicada with coin. Hand carved. Green and white. Handmade sterling silver bail. 1.4in height, .5in length and .22in width. 4g in weight.A cicada is an emblem of eternal youth and happiness, as well as life after death. Its association with immortality is why many keep cicadas as pets.",
            image: "jcp.jpeg",
            price: 150.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Snake Ring II",
            description: "Jade. Snake Ring with coin. Hand carved. Green and brown. 9g in weight. 1in height, 1in length and .5in width. Size 5. The snake is thought to be wise, sensual, enigmatic and deep thinking.",
            image: "jsri.jpeg",
            price: 150.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Jade Foo Dog Ring",
            description: "Jade. Foo Dog Ring. Hand carved. Green. 15g in weight. 1.3in height, 1.25in length and .5in width. Size 11. The Imperial Guardian Lions, or Foo Dogs, are protectors which symbolize strength and bravery.",
            image: "jfdr.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Jade Koi Fish Ring",
            description: "Jade. Koi Fish Ring. Dark green and white. Hand carved. 16g in weight. Size 12. 1.5in height, 1.25in length and .5in width. Koi fish signify success and wealth.",
            image: "jkfr.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
        {
            name: "Antique Decorative Jade Dragon Display Cup",
            description: "Jade. White and green color. Hand carved. 67g in weight. 2.25in height, 1.75in length and .5in width. Antique.",
            image: "adjddc.jpeg",
            price: 350.00,
            quantity: 100,
            category: categories[3]._id
        },
        {
            name: "Jade Kirin Pendant",
            description: "Jade Pendant. Green with hints of white. 1.41in length, 2in height and .2in width. 30.12g in weight. Handmade sterling silver bail. Kirin (麒麟, Kirin) is the guardian of the home and a protector from evil spirits. It also represents goodwill and wisdom. One of the rarest, most awesome, and most powerful creatures ever known in East Asia.",
            image: "jkp.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Koi Fish Pendant II",
            description: "White and green jade koi fish. 1.25in length, 2.25in height and .23in width. 25.15g in weight. Handmade sterling silver bail. Koi fish signify success and wealth.",
            image: "jkfpi.jpeg",
            price: 280.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Foo Dog Pendant",
            description: "Jade foo dog. White with accent of green. 1.61 in length, .9 in height and .53 in width. 37g in weight. Handmade sterling silver bail. Often seen outside of temples, palaces, government offices and even homes, the Imperial Guardian Lions are protectors which symbolize strength and bravery.",
            image: "jfdp.jpeg",
            price: 200.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Dragon Pendant",
            description: "Jade dragon pendant. Hand carved. .75in in height and 1.6in in length. Colors of green and white. Handmade sterling silver bail. DRAGON (龍 - lóng) Magnanimous, strong, vigorous, self-assured, proud, direct, harmonic, eager, zealous, fiery, passionate, decisive, pioneering, ambitious, generous, loyal and healthy.",
            image: "jdp.jpeg",
            price: 150.00,
            quantity: 100,
            category: categories[2]._id
        },
        {
            name: "Jade Koi Fish Ring II",
            description: "Jade koi fish ring. 1.2in in height and 1.5in in length. Hand carved. Colors of green and white. Koi fish signify success and wealth.",
            image: "jkfri.jpeg",
            price: 175.00,
            quantity: 100,
            category: categories[1]._id
        },
    ]);

    console.log('all done!')
    process.exit(0);
});
