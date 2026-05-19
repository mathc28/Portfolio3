'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SectionLabel } from '../label/Label';
import { RevealTitle } from "../revealtitle/RevealTitle";
import './style.css';
import { useLang } from '@/context/LangContext';
import { translations } from '@/data/translations';

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

export function ContactSection() {
  const { lang } = useLang();
  const tr = translations[lang].contact;

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
    idle: tr.send,
    sending: tr.sending,
    success: tr.sent,
    error: tr.errorBtn,
  }[status];

  return (
    <section id="section-04" className="contact">
      <SectionLabel num="04" label={tr.sectionLabel} />

      <RevealTitle className="contact-title">
        <span className="line-mask">
          <span className="line-inner">
            {tr.title} <span className="contact-title-accent">{tr.titleAccent}</span>
          </span>
        </span>
      </RevealTitle>

      <div className="contact-grid">
        <div className="contact-info">
          <div>
            <h3 className="contact-headline">
              {tr.headline1}<br />{tr.headline2}
            </h3>
            <p className="contact-desc">{tr.desc}</p>

            <div className="contact-process">
              <p className="contact-process-label">{tr.processLabel}</p>
              <ul className="contact-process-list">
                {tr.steps.map((step) => (
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
              <label htmlFor="name" className="contact-field-label">{tr.nameLabel}</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={tr.namePlaceholder}
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email" className="contact-field-label">{tr.emailLabel}</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={tr.emailPlaceholder}
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field contact-field--grow">
              <label htmlFor="message" className="contact-field-label">{tr.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={tr.messagePlaceholder}
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
                {tr.successMsg}
              </p>
            )}

            {status === 'error' && (
              <p className="contact-feedback contact-feedback--error">
                {tr.errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
