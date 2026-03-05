import { Router } from 'express';
import { validateBody } from '../middlewars/validateBody.js';
import { contactSchema } from '../validation/contactSchema.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { createContactController, deleteContactController, getAllContactsController } from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', validateBody(contactSchema), ctrlWrapper(getAllContactsController));

contactsRouter.post('/', validateBody(contactSchema), ctrlWrapper(createContactController));

contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));


export default contactsRouter;
