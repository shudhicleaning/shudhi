import { Phone, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta" id="contact" aria-label="Contact us">
      <div className="wrap">
        <h2>Need your tank cleaned?</h2>
        <p>Reach out and we'll get back to you with a quote.</p>
        <div className="cta-btns">
          <a href="tel:+919292241065" className="btn-dark">
            <Phone size={16} /> 9292241065
          </a>
          <a
            href="https://wa.me/919292241065"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white-o"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
