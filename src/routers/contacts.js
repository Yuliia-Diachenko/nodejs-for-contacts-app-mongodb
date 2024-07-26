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
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);
contactsRouter.get('/', checkRoles(ROLES.USER),  ctrlWrapper(getContactsController));
contactsRouter.get('/:contactId', checkRoles(ROLES.USER), isValidId, ctrlWrapper(getContactByIdController));
contactsRouter.delete('/:contactId', checkRoles(ROLES.USER), isValidId, ctrlWrapper(deleteContactController));
contactsRouter.post('/register', checkRoles(ROLES.USER), validateBody(createContactSchema), ctrlWrapper(createContactsController),);
contactsRouter.put('/:contactId', checkRoles(ROLES.USER), isValidId, validateBody(createContactSchema), ctrlWrapper(upsertContactController),);
contactsRouter.patch('/:contactId', checkRoles(ROLES.USER), isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController),);

export default contactsRouter;
