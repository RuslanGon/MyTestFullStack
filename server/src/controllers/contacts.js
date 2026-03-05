import { createContact, getAllContacts } from "../services/contacts.js";

export const getAllContactsController = async (req, res, next) => {
    const contacts = await getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts',
      data: contacts,
    });
  };

  export const createContactController = async (req, res) => {
    const contact = await createContact(req.body);

    res.status(201).json({
      status: 201,
      message: 'Contact successfully created',
      data: contact,
    });
  };
