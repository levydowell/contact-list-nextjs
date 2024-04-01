'use client';
import { useState } from 'react';
import { ContactsAPI } from './data/contacts-api.js';
import Link from 'next/link';

export default function Home() {
  const [allContacts, _] = useState(ContactsAPI.all());
  console.log(allContacts);
  return (
  <main>
    <div>
      <h1>Contacts</h1>
      {allContacts.map((c) => (
        <li key={c.id}>
          {c.name}
        </li>
      ))}
    </div>
  </main>
  );
}
