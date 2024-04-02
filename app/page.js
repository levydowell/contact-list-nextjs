'use client';
import { useState } from 'react';
import { ContactsAPI } from './data/contacts-api.js';
import Link from 'next/link';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';


export default function Home() {
  const [allContacts, _] = useState(ContactsAPI.all());
  console.log(allContacts);
  return (
  <main>
    <div className='container'>
      <h1>Contacts</h1>
      
      {allContacts.map((c) => (
        <div className='row justify-content-start' key={c.id}>
          <div className='col-3'>
            <img className='fit-picture' src={c.imgURL} alt='Profile Picture'>

            </img>
          </div>
          <div className='col-3'>
            {c.name}
          </div>
          <div className='col-3'>
            {c.name}
          </div>
          <div className='col-3'>
            {c.name}
          </div>
        </div>
      ))}
      
    </div>
  </main>
  );
}
