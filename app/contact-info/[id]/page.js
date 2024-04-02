'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactsAPI } from '../../data/contacts-api';

export default function Contact() {
  const { id } = useParams();
  const contact = ContactsAPI.get(parseInt(id, 10));

  if (!player) {
		return <div>Sorry, but the player was not found</div>;
	}

  return (
    <main>
      <div>
      {contact.name}
      </div>
    </main>
  )
}