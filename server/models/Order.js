const { Schema, model } = require('mongoose');
const User = require('./User')

const orderSchema = new Schema({ 
    user: User,
    purchaseDate: {
        type: Date,
        default: Date.now
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
      ]
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order; 


