'use client';
import { useState } from 'react';
import { ContactsAPI } from './data/contacts-api.js';
import Link from 'next/link';
import { PrintHeader } from './components/printHeader.js';
import { PrintContacts } from './components/printContacts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';


export default function Home() {
  const [allContacts, _] = useState(ContactsAPI.all());
  console.log(allContacts);
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
