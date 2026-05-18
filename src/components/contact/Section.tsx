'use client';


import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionLabel } from '../label/Label';
import { RevealTitle } from "../revealtitle/RevealTitle";
import './style.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const contactLinks = [
  {
    label: 'MAIL',
    text: 'mathco.dev@gmail.com',
    href: 'mailto:mathco.dev@gmail.com',
  },
  {
    label: 'LINKEDIN',
    text: 'linkedin.com/in/mathieucocu',
    href: 'https://linkedin.com/in/mathieucocu',
  },
  {
    label: 'GITHUB',
    text: 'github.com/mathieucocu',
    href: 'https://github.com/mathc28',
  },
];

const steps = [
  { num: '01', text: 'Réponse sous 48h' },
  { num: '02', text: 'Appel découverte offert' },
  { num: '03', text: 'Devis sous 5 jours' },
];

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const buttonText = {
    idle: 'Envoyer →',
    sending: 'Envoi en cours...',
    success: '✓ Message envoyé',
    error: 'Erreur — Réessayer',
  }[status];

  return (
    <section id="section-04" className="contact">
      <SectionLabel num="04" label="CONTACT" />

      <RevealTitle className="contact-title">
        <span className="line-mask">
          <span className="line-inner">
            On se <span className="contact-title-accent">lance ?</span>
          </span>
        </span>
      </RevealTitle>

      <div className="contact-grid">
        <div className="contact-info">
          <div>
            <h3 className="contact-headline">
              Une idée<br />en tête ?
            </h3>
            <p className="contact-desc">
              Réponse sous 48h.
            </p>

            <div className="contact-process">
              <p className="contact-process-label">APRÈS L'ENVOI</p>
              <ul className="contact-process-list">
                {steps.map((step) => (
                  <li key={step.num}>
                    <span>{step.num}</span> {step.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="contact-links">
            {contactLinks.map((item) => (
              <li key={item.label} className="contact-link-row">
                <span className="contact-link-label">{item.label}</span>
                <a 
                  href={item.href}
                  className="contact-link-value"
                  target={item.label === 'MAIL' ? '_self' : '_blank'}
                  rel="noreferrer"
                >
                  {item.text} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name" className="contact-field-label">NOM</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nom"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email" className="contact-field-label">EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field contact-field--grow">
              <label htmlFor="message" className="contact-field-label">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Décrivez votre projet en quelques lignes : type de site, échéance, budget approximatif…"
                className="contact-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={20}
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === 'sending' || status === 'success'}
            >
              {buttonText}
            </button>

            {status === 'success' && (
              <p className="contact-feedback contact-feedback--success">
                Merci, votre message est bien arrivé. Je vous réponds sous 48h.
              </p>
            )}

            {status === 'error' && (
              <p className="contact-feedback contact-feedback--error">
                Oups, le message n'a pas pu être envoyé. Vous pouvez aussi m'écrire directement à mathco.dev@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}