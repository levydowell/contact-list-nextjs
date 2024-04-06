'use client';
import { useState } from 'react';
import { ContactsAPI } from './data/contacts-api.js';
import { PrintHeader } from './components/printHeader.js';
import PrintContacts from './components/printContacts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';


export default function Home() {
  // uses .all method of Contacts API to retrieve list of all contacts.
  const [allContacts, _] = useState(ContactsAPI.all());
  if (allContacts.length === 0) {
    return (
      <PrintHeader />
    )
  }

  return (
  <main>
    <div className='container'>
      <PrintHeader />
      <PrintContacts allContacts={ allContacts }/>     
    </div>
  </main>
  );
}
