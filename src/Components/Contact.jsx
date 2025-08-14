import React from 'react'

const Contact = () => {
  return (
    <>
    
   
    <div style={{ maxWidth: '500px', margin: '2rem auto', background: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
      <form>
        <div style={{ marginBottom: '1rem' }}>
           <h1>Contact Us</h1>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name</label>
          <input type="text" id="name" name="name" className="form-control" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Email</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem' }}>Message</label>
          <textarea id="message" name="message" rows="4" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      <div style={{ marginTop: '2rem' }}>
        <h4>Contact Details</h4>
        <p>
          <strong>Phone:</strong> 604 217 2992<br />
          <strong>Email:</strong> info@a11freight.com<br />
          <strong>Location:</strong> Fraser Valley, BC, CA
        </p>
      </div>
    </div>
    </>
  )
}

export default Contact