const express = require('express');
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const {ctrlWrapper} = require("../../helpers");
const { validateBody, isValidId } = require('../../middlewares');
const schemas = require("../../schemas/contact")


router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getById));

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.add))

router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.removeById))

router.put('/:contactId', isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:contactId/favorite', validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));

module.exports = router
