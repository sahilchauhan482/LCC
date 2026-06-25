import { useState, type FormEvent } from 'react';

interface Props {
  whatsappNumber: string;
  services: string[];
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const PHONE_RE = /^[+]?[\d\s()-]{8,16}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ whatsappNumber, services }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const service = String(data.get('service') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (name.length < 2) next.name = 'Please enter your name.';
    if (!PHONE_RE.test(phone)) next.phone = 'Enter a valid phone number.';
    if (email && !EMAIL_RE.test(email)) next.email = 'Enter a valid email address.';
    if (!service) next.service = 'Please choose a service.';
    if (message.length < 5) next.message = 'Tell us a little about the issue.';
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    
    // Construct WhatsApp message
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const service = String(data.get('service') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    let text = `*New Repair Inquiry from Website*\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    if (email) text += `*Email:* ${email}\n`;
    text += `*Service:* ${service}\n`;
    text += `*Problem:* ${message}`;

    const waNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab (works well on both mobile and desktop)
    window.open(waUrl, '_blank');
    
    setStatus('success');
    form.reset();
  }

  if (status === 'success') {
    return (
      <div className="form-result" role="status">
        <strong>Redirecting to WhatsApp...</strong>
        <p>If WhatsApp didn't open automatically, please check your pop-up blocker or click the WhatsApp icon in the footer.</p>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={handleSubmit} noValidate>
      <div className="field-group">
        <input id="name" name="name" type="text" autoComplete="name" placeholder=" " required />
        <label htmlFor="name">Name</label>
        {errors.name && <span className="err">{errors.name}</span>}
      </div>

      <div className="row">
        <div className="field-group">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder=" "
            required
          />
          <label htmlFor="phone">Phone</label>
          {errors.phone && <span className="err">{errors.phone}</span>}
        </div>
        <div className="field-group">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder=" "
          />
          <label htmlFor="email">
            Email <span className="opt">(optional)</span>
          </label>
          {errors.email && <span className="err">{errors.email}</span>}
        </div>
      </div>

      <div className="field-group">
        <select id="service" name="service" defaultValue="" required>
          <option value="" disabled hidden></option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
        <label htmlFor="service">Service needed</label>
        {errors.service && <span className="err">{errors.service}</span>}
      </div>

      <div className="field-group">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder=" "
          required
        />
        <label htmlFor="message">Describe the problem or what you need…</label>
        {errors.message && <span className="err">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className="err err--form" role="alert">
          Something went wrong sending the form. Please call us instead.
        </p>
      )}

      <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Redirecting…' : 'Send via WhatsApp'}
        <span className="btn__arrow" aria-hidden="true">
          ↗
        </span>
      </button>
    </form>
  );
}
