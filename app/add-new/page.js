'use client';
import { ContactsAPI } from "../data/contacts-api";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddContact() {
  const [id, setID] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [phone, setPhone] = useState(null);
  const router = useRouter();

  const generateId = () => Math.round(Math.random() * 100000000); 

  const handleAddContact = () => {
    console.log('id', id);
    ContactsAPI.addContact({
      id,
      name,
      email,
      imgURL,
      phone,
    });
    router.push('../');
    
  };


  return (
    <div>
      
      <form>
        
        <label>Name</label>
        <input 
          type="text"
          className="form-control"
          onChange={(e) => {
            setName(e.target.value);
            setID(generateId())
          }}
        />

        <label>email</label>
        <input 
          type="text"
          className="form-control"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <label>Image URL</label>
        <input 
          type="text"
          className="form-control"
          onChange={(e) =>
            setImgURL(e.target.value)
          }
        />

        <label>Phone</label>
        <input 
          type="text"
          className="form-control"
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <button type="button" onClick={handleAddContact}>Add New Contact</button>
      </form>

      <Link href='../page'>All Contacts</Link>
    </div>
  )
}