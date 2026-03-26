"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert("Configuration error. Please check your environment variables.");
      return;
    }

    const formData = new FormData(form.current!);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name, email, message, subject: "Portfolio Contact", time: new Date().toLocaleString() },
        EMAILJS_PUBLIC_KEY
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
          alert(`Failed to send message. Error: ${error?.message || "Unknown error"}`);
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">&gt; ping_me</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-sub">
            I&apos;m actively looking for internship opportunities. My inbox is always open!
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left: Contact Cards */}
          <div className={styles.contactCards} data-aos="fade-right">
            <div className={styles.statusBanner}>
              <span className={styles.statusDot}></span>
              <span>Available for internships</span>
            </div>

            <a href="mailto:lohar6987@gmail.com" className={styles.contactCard}>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <span className={styles.cardLabel}>email</span>
                <span className={styles.cardValue}>lohar6987@gmail.com</span>
              </div>
              <i className={`fa-solid fa-arrow-right ${styles.cardArrow}`}></i>
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-lohar-3037b32b9"
              target="_blank"
              rel="noopener"
              className={styles.contactCard}
            >
              <i className="fa-brands fa-linkedin"></i>
              <div>
                <span className={styles.cardLabel}>linkedin</span>
                <span className={styles.cardValue}>aditya-lohar</span>
              </div>
              <i className={`fa-solid fa-arrow-right ${styles.cardArrow}`}></i>
            </a>

            <a
              href="https://github.com/Adityaloharr0030"
              target="_blank"
              rel="noopener"
              className={styles.contactCard}
            >
              <i className="fa-brands fa-github"></i>
              <div>
                <span className={styles.cardLabel}>github</span>
                <span className={styles.cardValue}>Adityaloharr0030</span>
              </div>
              <i className={`fa-solid fa-arrow-right ${styles.cardArrow}`}></i>
            </a>
          </div>

          {/* Right: Form */}
          <div className={styles.contactFormWrap} data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name">name_</label>
                <input type="text" id="contact-name" name="name" placeholder="John Smith" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email">email_</label>
                <input type="email" id="contact-email" name="email" placeholder="john@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-message">message_</label>
                <textarea id="contact-message" name="message" rows={5} placeholder="Hi Aditya, I'd love to discuss..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={isSending}>
                {!isSending ? (
                  <span><i className="fa-solid fa-satellite-dish"></i> Send Transmission</span>
                ) : (
                  <span><i className="fa-solid fa-spinner fa-spin"></i> Sending...</span>
                )}
              </button>

              {isSuccess && (
                <p className={styles.formSuccess}>
                  <i className="fa-solid fa-circle-check"></i> Message sent successfully! I&apos;ll reply soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
