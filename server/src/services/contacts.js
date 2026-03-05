import { Contact } from "../db/models/contact.js";

export const getAllContacts = async () => {
    return await Contact.find({});
  };

  export const createContact = async (payload) => {
    const contact = await Contact.create(payload);
    return contact;
  };

  export const deleteContact = async (contactId) => {
    const deletedContact = await Contact.findByIdAndDelete(contactId);
    return deletedContact;
  };

  export const upsertContact = async (id, payload, options = {}) => {
    const contact = await Contact.findByIdAndUpdate(id, payload, { new: true, ...options });
    return contact;
  };
