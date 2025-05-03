import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    return;
  }
  contacts.splice(-1);
  return console.log(contacts);
};

removeLastContact();
