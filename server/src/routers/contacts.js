import { Router } from 'express';
import { validateBody } from '../middlewars/validateBody.js';
import { contactSchema } from '../validation/contactSchema.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { createContactController, deleteContactController, getAllContactsController, patchContactController } from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.post('/', validateBody(contactSchema), ctrlWrapper(createContactController));

contactsRouter.patch('/:contactId', validateBody(contactSchema), ctrlWrapper(patchContactController));

contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));


export default contactsRouter;
