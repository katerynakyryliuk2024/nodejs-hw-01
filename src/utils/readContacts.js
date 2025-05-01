import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  return fs.readFile(PATH_DB, { encoding: 'utf-8' });
};
