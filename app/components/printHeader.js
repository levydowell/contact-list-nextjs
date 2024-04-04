import Link from 'next/link';

export const PrintHeader = () => {
  return (
    <main>
      <div className='text-center'>
        <h1>Contacts</h1>
        
          <Link href="./add-new">
            <button className='btn btn-primary'>Add Contact</button>
          </Link>
        
      </div>
    </main>
  )
}