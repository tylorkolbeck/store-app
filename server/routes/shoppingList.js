const express = require('express');
const router = express.Router();
const shoppingListController = require('../src/controllers/shoppingListController')

/* GET products listing. */
router.get('/', shoppingListController.shoppingListGetAll);
router.get('/cartNames', shoppingListController.shoppingListGetListNames);
router.get("/:cartId", shoppingListController.getShoppingList)


module.exports = router;