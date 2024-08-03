import { Router } from 'express';
import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getContactsController,
        getContactByIdController,
        createContactsController,
        deleteContactController,
        upsertContactController,
        patchContactController } from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
// import { checkRoles } from '../middlewares/checkRoles.js';
// import { ROLES } from '../constants/index.js';

const router = Router();
const jsonParser = express.json();

router.use(authenticate);
router.get('/', ctrlWrapper(getContactsController));
router.get('/:contactId',  isValidId, ctrlWrapper(getContactByIdController));
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));
router.post('/', jsonParser,  validateBody(createContactSchema), ctrlWrapper(createContactsController),);
router.put('/:contactId', jsonParser,  isValidId, validateBody(createContactSchema), ctrlWrapper(upsertContactController),);
router.patch('/:contactId', jsonParser, isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController),);

export default router;
