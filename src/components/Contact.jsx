import { useState } from 'react'
import { Send } from 'lucide-react'
import './Contact.css'

// TODO: replace with your real Formspree endpoint (or swap this
// action for your own backend / email service).
const FORM_ENDPOINT = 'https://formspree.io/f/xjybpean'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-inner">
        <p className="section-label">Get in touch</p>
        <h2 className="section-heading">Let's work together</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
          />
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            <Send size={16} />
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="form-note form-note--success">
              Thanks — your message is on its way.
            </p>
          )}
          {status === 'error' && (
            <p className="form-note form-note--error">
              Something went wrong. Try again, or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
