import styles from '../../Styles/Contact/Contact.module.css';

const  Contact= () => { 
  return (
    <div className={`py-5 ${styles.contactSection}`} id='contact'>
      <div className="container">
        <h2 className="text-center text-danger fw-bold mb-5">Contact us</h2>
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <div className={styles.contactBox}>
              <h5 className="mb-4">Contact Form</h5>
              <form>
                <input type="text" className={styles.input} placeholder="Full Name" />
                <input type="email" className={styles.input} placeholder="Email" />
                <textarea className={styles.textarea} placeholder="Message" rows="4"></textarea>
                <button type="submit" className={styles.sendBtn}>SEND</button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <div className="row g-3">
              <div className="col-sm-6">
                <div className={styles.infoCard}>
                  <i className="bi bi-telephone-fill"></i>
                  <p className="mb-0 fw-bold">Contact Us</p>
                  <small>+91 9876543210</small>
                </div>
              </div>
              <div className="col-sm-6">
                <div className={styles.infoCard}>
                  <i className="bi bi-whatsapp"></i>
                  <p className="mb-0 fw-bold">WhatsApp</p>
                  <small>+91 9876543210</small>
                </div>
              </div>
              <div className="col-sm-6">
                <div className={styles.infoCard}>
                  <i className="bi bi-envelope-fill"></i>
                  <p className="mb-0 fw-bold">Email Us</p>
                  <small>support@mrcharm.com</small>
                </div>
              </div>
              <div className="col-sm-6">
                <div className={styles.infoCard}>
                  <i className="bi bi-geo-alt-fill"></i>
                  <p className="mb-0 fw-bold">Address</p>
                  <small>SR Nagar, Hyderabad</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
