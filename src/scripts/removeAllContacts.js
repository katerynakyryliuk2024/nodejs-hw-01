import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  let contacts = await readContacts();
  contacts = [];
  console.log(contacts);
  return await writeContacts(contacts);
};

removeAllContacts();
