import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Log for debugging
    console.log('Form data being sent:', formData);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Arun Yadav'
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        'service_ccgenja',        // Your Service ID
        'template_rnlz755',       // Your Template ID
        templateParams,
        'U-gXo3wMA6Ht0lLzH'       // Your Public Key
      );

      console.log('EmailJS Success:', result);

      if (result.text === 'OK') {
        setStatus('success');
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Get In Touch
          <span className="title-decoration">_</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Create Something Amazing Together! 🚀</h3>
              <p>
                Got a project in mind? Want to collaborate? Or just want to say hi? 
                Drop me a message and I'll get back to you faster than a promise resolves! ⚡
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>arunyadavbelli8@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 6304364773</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/arunbyad123" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💻</span>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/arunyadav27/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/arun_yadav55377" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>🐦</span>
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>📸</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Let's build something awesome together..."
                  disabled={isSubmitting}
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>🚀</span>
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="status-message error">
                  <span>❌</span>
                  <p>Oops! Something went wrong. Check the console (F12) for error details.</p>
                </div>
              )}
            </form>

            {showSuccess && (
              <div className="success-animation">
                <div className="success-content">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thanks for reaching out! I'll get back to you soon! 🎉</p>
                  <div className="success-confetti">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className="confetti-piece" style={{ '--i': i }}></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="contact-joke">
          <p>"I'm always 'async/await'ing your message!" 😄</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;