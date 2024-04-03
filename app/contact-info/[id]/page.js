'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactsAPI } from '../../data/contacts-api';

export default function Contact() {
  const { id }  = useParams();
  const contact = ContactsAPI.get(parseInt(id, 10));
  console.log('dynamic id', id);

  if (!contact) {
		return <div>Sorry, we could not find that contact</div>;
	}

  return (
    <main>
      <div className='text-center'>
        <h1>Contact Info</h1>
        <h2>{contact.name}</h2>
        <img src={contact.imgURL} alt='Profile Picture'></img>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <Link href={"../"}>Back</Link>
      </div>
      
    </main>
  )
}