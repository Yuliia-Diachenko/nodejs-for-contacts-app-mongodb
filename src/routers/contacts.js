import { Router } from 'express';
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

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactByIdController));
router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));
router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createContactsController),);
router.put('/contacts/:contactId', isValidId, validateBody(createContactSchema), ctrlWrapper(upsertContactController),);
router.patch('/contacts/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController),);

export default router;
