import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const contacts = fs.readFile(PATH_DB, { encoding: 'utf-8' });
    console.log(contacts);
  } catch (error) {
    console.log(error);
  }
};
