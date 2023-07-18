import React from "react";
import "./pageStyling/Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission if the information is invalid or not there

    // Retrieve form input values
    const firstName = event.target.elements.fname.value;
    const lastName = event.target.elements.lname.value;
    const phoneNumber = event.target.elements.phone.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Perform validation checks
    if (!firstName || !lastName || !phoneNumber || !email || !message) {
      alert("Please fill in all fields."); // Display error message
      return;
    }

    // Validation passed, proceed with form submission or other actions
    alert("Form submitted!");
    event.target.reset(); // Resets the form after submission
  };

  return (
    <div>
      <h1 className="contact" header>
        Contact Us!
      </h1>
      <section className="contact-section">
        <div className="contact-container">
          <img
            src="/contactimg.jpeg"
            className="section-contact-image"
            alt="Vinyls"
          />
          <div className="contact-info">
            <h1 className="contact-title">
              <span> What Would You Like to Hear?</span>
            </h1>
            <div className="container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name:</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  required
                />
                <br />
                <label htmlFor="lname">Last Name:</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  required
                />
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <br />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  required
                />
                <br />
                <label htmlFor="email">Email Address:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Contact Email"
                  required
                />
                <br />
                <label htmlFor="message">Leave us a note!</label>
                <br />
                <textarea
                  id="message"
                  placeholder="Write us a message"
                  required
                ></textarea>
                <br />
                <label htmlFor="rewards">
                  Can we sign you up for our Vinyl Reward Program?
                </label>
                <br />
                <label htmlFor="check-yes">Yes</label>
                <input type="checkbox" id="check-yes" />
                <label htmlFor="check-no">No</label>
                <input type="checkbox" id="check-no" />
                <br />
                <label htmlFor="birthday">
                  Tell us your birthday for a special surprise!
                </label>
                <input type="date" id="birthday" />
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
