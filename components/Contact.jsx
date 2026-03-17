export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Let&apos;s connect</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-sub">
            I&apos;m actively looking for internship opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: contact cards */}
          <div className="contact-cards" data-aos="fade-right">
            <a href="mailto:adityalohar00030@gmail.com" className="contact-card" id="email-card">
              <div className="contact-card-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="contact-card-info">
                <span className="contact-card-label">Email me at</span>
                <span className="contact-card-value">adityalohar00030@gmail.com</span>
              </div>
              <i className="fa-solid fa-arrow-right contact-card-arrow"></i>
            </a>

            <a href="https://linkedin.com/in/aditya-lohar" target="_blank" rel="noopener" className="contact-card" id="linkedin-card">
              <div className="contact-card-icon linkedin-icon"><i className="fa-brands fa-linkedin"></i></div>
              <div className="contact-card-info">
                <span className="contact-card-label">Connect on</span>
                <span className="contact-card-value">linkedin.com/in/aditya-lohar</span>
              </div>
              <i className="fa-solid fa-arrow-right contact-card-arrow"></i>
            </a>

            <a href="https://github.com/Adityaloharr0030" target="_blank" rel="noopener" className="contact-card" id="github-card">
              <div className="contact-card-icon github-icon"><i className="fa-brands fa-github"></i></div>
              <div className="contact-card-info">
                <span className="contact-card-label">Follow on</span>
                <span className="contact-card-value">github.com/Adityaloharr0030</span>
              </div>
              <i className="fa-solid fa-arrow-right contact-card-arrow"></i>
            </a>
          </div>

          {/* Right: contact form */}
          <div className="contact-form-wrap" data-aos="fade-left">
            <form id="contact-form" className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-user"></i>
                  <input type="text" id="name" name="name" placeholder="John Smith" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-tag"></i>
                  <input type="text" id="subject" name="subject" placeholder="Internship Opportunity" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="input-wrap textarea-wrap">
                  <i className="fa-solid fa-comment"></i>
                  <textarea id="message" name="message" rows="5" placeholder="Hi Aditya, I'd love to discuss..." required></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-full" id="submit-btn">
                <span id="btn-text"><i className="fa-solid fa-paper-plane"></i> Send Message</span>
                <span id="btn-loader" style={{ display: "none" }}><i className="fa-solid fa-spinner fa-spin"></i> Sending...</span>
              </button>
              <p className="form-success" id="form-success" style={{ display: "none" }}>
                <i className="fa-solid fa-circle-check"></i> Message sent successfully! I&apos;ll reply soon.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
