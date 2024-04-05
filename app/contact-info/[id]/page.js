'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactsAPI } from '../../data/contacts-api';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const { id }  = useParams();
  const contact = ContactsAPI.get(parseInt(id, 10));
  const router = useRouter();

  if (!contact) {
		return <div>Sorry, we could not find that contact</div>;
	}

  const handleDelete = () => {
    ContactsAPI.delete(contact);
    router.push('../')
  }

  return (
    <main>
      <div className='text-center'>
        <h1 className='contactInfoHeader'>Contact Info</h1>
        <h2>{contact.name}</h2>
        <img src={contact.imgURL} alt='Profile Picture'></img>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <button 
          className='btn btn-danger'
          onClick={ handleDelete }
        >
          Delete
        </button>
        <br />
        <Link href={"../"}>Back</Link>
      </div>
      
    </main>
  )
}