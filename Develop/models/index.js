// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//These associations define the relationships between the tables

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: "CASCADE"
});

// Categories have many Products
Category.hasMany(Product, { 
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
//Defining an alias for when data is retrieved
  // as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
