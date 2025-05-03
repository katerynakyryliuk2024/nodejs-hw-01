import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (number) => {
  const randomGenerateContacts = [];
  for (let i = 0; i <= number; i++) {
    const contacts = createFakeContact();
    randomGenerateContacts.push(contacts);
  }
  const dbContacts = await readContacts();
  const newArr = dbContacts.concat(randomGenerateContacts);
  await writeContacts(newArr);
};

addOneContact(1);
