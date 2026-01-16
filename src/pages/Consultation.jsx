import React from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from './Footer';
const Consultation=()=>{
    return(
        <div>
          <Navbar2/>
          <br />
          <br />
          <br />
<section className="hire-us-section">
  <div className="hire-us-container">
    <div className="hire-us-content">
      <h2>HIRE US</h2>
    </div>
    <div className="hire-us-form-container">
      <form className="hire-us-form">
        <label>
          Full Name *
          <input type="text" name="fullName" required />
        </label>
        <label>
          Mobile Number *
          <input type="tel" name="mobileNumber" required />
        </label>
        <label>
          Email Address *
          <input type="email" name="email" required />
        </label>
        <label>
          Location *
          <input type="text" name="location" required />
        </label>
        <label>
          Message
          <textarea name="message"></textarea>
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  </div>
</section>
<Footer/>
</div>
    )
}
export default Consultation;