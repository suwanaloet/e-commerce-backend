const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET ALL
// http://localhost:3001/api/categories/
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      model: Product,
      // be sure to include its associated Products
      //ref product-seeds

      attirbutes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
    .then(dbCategoriesData => res.json(dbCategoriesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//GET ONE
http://localhost:3001/api/categories/1
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      //by id value
      id: req.params.id,
    },
    include: [{
      model: Product,
      // be sure to include its associated Products
      //ref product-seeds

      attirbutes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
    .then(dbCategoriesData => res.json(dbCategoriesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST
// http://localhost:3001/api/categories/
/*
 {
    "category_name" : "Stitch Fix Clothes"
 }
*/
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoriesData => res.json(dbCategoriesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT
// http://localhost:3001/api/categories/6
/*
 {
    "category_name" : "Stitch Fix Clothing"
 }
*/
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },

    {
      where: {
        id: req.params.id,
      }
    }
  )
    .then(dbCategoriesData => res.json(dbCategoriesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});


// DELETE
// http://localhost:3001/api/categories/6

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbCategoriesData => res.json(dbCategoriesData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
