import { getAllContacts } from "../services/contacts.js";

export const getAllContactsController = async (req, res, next) => {
    const contacts = await getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts',
      data: contacts,
    });
  };
