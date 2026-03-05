import { Router } from 'express';
import { validateBody } from '../middlewars/validateBody.js';
import { contactSchema } from '../validation/contactSchema.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { getAllContactsController } from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', validateBody(contactSchema), ctrlWrapper(getAllContactsController));

contactsRouter.post('/', validateBody(contactSchema), (req, res, next) => {
    res.json({ message: 'Contacts post' });
});

contactsRouter.delete('/:contactId', (req, res, next) => {
    res.json({ message: 'Contacts delete' });
});


export default contactsRouter;
