"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS once on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS configuration:", {
        serviceId: !EMAILJS_SERVICE_ID,
        templateId: !EMAILJS_TEMPLATE_ID,
        publicKey: !EMAILJS_PUBLIC_KEY,
      });
      alert("Configuration error. Please check your environment variables.");
      return;
    }

    // Basic internal validation
    const formData = new FormData(form.current!);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const subject = (formData.get("subject") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current!
      )
      .then(
        () => {
          setIsSending(false);
          setIsSuccess(true);
          form.current!.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          setIsSending(false);
          console.error("EmailJS Error:", error);
          alert(`Failed to send message. Error: ${error?.message || "Unknown error"}`);
        }
      );
  };
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Let&apos;s connect</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-sub">
            I&apos;m actively looking for internship opportunities. Whether you
            have a question, a project idea, or just want to say hi — my inbox
            is always open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: contact cards */}
          <div className="contact-cards" data-aos="fade-right">
            <a
              href="mailto:lohar6987@gmail.com"
              className="contact-card"
              id="email-card"
            >
              <div className="contact-card-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Email me at</span>
                <span className="contact-card-value">
                  lohar6987@gmail.com
                </span>
              </div>
              <i className="fa-solid fa-arrow-right contact-card-arrow"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-lohar-3037b32b9"
              target="_blank"
              rel="noopener"
              className="contact-card"
              id="linkedin-card"
            >
              <div className="contact-card-icon linkedin-icon">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Connect on</span>
                <span className="contact-card-value">
                  linkedin.com/in/aditya-lohar-3037b32b9
                </span>
              </div>
              <i className="fa-solid fa-arrow-right contact-card-arrow"></i>
            </a>

            <a
              href="https://github.com/Adityaloharr0030"
              target="_blank"
              rel="noopener"
              className="contact-card"
              id="github-card"
            >
              <div className="contact-card-icon github-icon">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Follow on</span>
                <span className="contact-card-value">
                  github.com/Adityaloharr0030
                </span>
              </div>
              <i className="fa-solid fa-arrow-right contact-card-arrow"></i>
            </a>
          </div>

          {/* Right: contact form */}
          <div className="contact-form-wrap" data-aos="fade-left">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              className="contact-form"
              noValidate
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-tag"></i>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Internship Opportunity"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="input-wrap textarea-wrap">
                  <i className="fa-solid fa-comment"></i>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Hi Aditya, I'd love to discuss..."
                    required
                  ></textarea>
                </div>
              </div>
              
              {/* Hidden field for timestamp */}
              <input 
                type="hidden" 
                name="time" 
                value={new Date().toLocaleString()}
              />
              <button
                type="submit"
                className="btn btn-primary btn-full"
                id="submit-btn"
                disabled={isSending}
              >
                {!isSending ? (
                  <span id="btn-text">
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </span>
                ) : (
                  <span id="btn-loader">
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </span>
                )}
              </button>
              {isSuccess && (
                <p
                  className="form-success"
                  id="form-success"
                  style={{ display: "block" }}
                >
                  <i className="fa-solid fa-circle-check"></i> Message sent
                  successfully! I&apos;ll reply soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
