const db = require('../config/connection');
const { Product, User, Order, Category} = require('../models')
const seedUsers = require('./userSeeds');
const seedProducts = require('./productSeeds.js');
const seedSampleOrders = require('./sampleOrderSeeds.js')

runSeeds = async () => {
  await seedCategories(),
  await seedProducts(),
  await seedUsers(),
  await seedSampleOrders(),
  console.log('--------- Seeding Complete --------- ');
  process.exit(0);
}
  


