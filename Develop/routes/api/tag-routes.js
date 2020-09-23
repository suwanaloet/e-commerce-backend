const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// GET ALL
// http://localhost:3001/api/tags/
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        through: ProductTag,
      }
    ],
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET ONE
// http://localhost:3001/api/tags/1
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      //by id value
      id: req.params.id,
    },
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        through: ProductTag,
      }
    ],
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST
// http://localhost:3001/api/tags/
/*
 {
    "tag_name" : "placeholdertagname"
 }
*/
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    // see tag-seeds
    tag_name: req.body.tag_name
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT
// http://localhost:3001/api/tags/9
/*
 {
    "tag_name" : "placeholder_tag_name"
 }
*/
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },

    {
      where: {
        id: req.params.id
      },
    },
  )
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE
// http://localhost:3001/api/tags/9
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
      where: {
        id: req.params.id
      },
    },
  )
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
