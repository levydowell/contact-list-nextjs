import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export const PrintContacts = ({ allContacts }) => {
  return (
    <div>
      <div className='row justify-content-center border'>
        <div className="col-3 text-center">Profile Pic</div>
        <div className="col-3 text-center">Name</div>
        <div className="col-3 text-center">Email</div>
        <div className="col-3 text-center">Phone</div>

      </div>
        {allContacts.map((c) => (
            <div className='row justify-content-center contacts' key={c.id}>
              <div className='col-3 text-center'>
                <img className='contactImg' src={c.imgURL} alt='Profile Picture'>
                </img>
              </div>
              <div className='col-3 text-center'>
                <Link href={`/contact-info/${c.id}`}>{c.name}</Link>
              </div>
              <div className='col-3 text-center'>
                {c.email}
              </div>
              <div className='col-3 text-center'>
                {c.phone}
              </div>
            </div>
        )
        )}
    </div>
  )
}