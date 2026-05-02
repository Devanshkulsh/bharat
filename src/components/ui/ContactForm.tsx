import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form
      className="grid gap-4 rounded-lg border border-orange-100 bg-white p-6 shadow-soft"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Name
        <input className="rounded-lg border border-stone-300 px-4 py-3" name="name" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Email
        <input className="rounded-lg border border-stone-300 px-4 py-3" type="email" name="email" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea className="min-h-32 rounded-lg border border-stone-300 px-4 py-3" name="message" required />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-white hover:bg-secondary"
      >
        <Send size={18} aria-hidden="true" />
        Send enquiry
      </button>
      {sent && (
        <p className="rounded-lg bg-green-50 p-3 text-sm font-semibold text-accent" role="status">
          Thanks. This form is a front-end stub and is ready for API integration.
        </p>
      )}
    </form>
  );
}
