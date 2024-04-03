'use client';
import { useState } from 'react';
import { ContactsAPI } from './data/contacts-api.js';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';


export default function Home() {
  const [allContacts, _] = useState(ContactsAPI.all());
  console.log(allContacts);
  if (allContacts === null) {
    return
  }
  return (
  <main>
    <div className='container'>
      <h1>Contacts</h1>
      <button>
        <Link href="./add-new">Add Contact</Link>
      </button>

      {allContacts.map((c) => (
        <div className='row justify-content-start border' key={c.id}>
          <div className='col-3'>
            <img className='contactImg' src={c.imgURL} alt='Profile Picture'>
            </img>
          </div>
          <div className='col-3 border'>
            <Link href={`/contact-info/${c.id}`}>{c.name}</Link>
          </div>
          <div className='col-3 border'>
            {c.email}
          </div>
          <div className='col-3 border'>
            {c.phone}
          </div>
        </div>
        
      ))}
      
    </div>
  </main>
  );
}
