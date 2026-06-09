const steps = [
  {
    title: 'Contact us',
    desc: 'Call or message us with your location and what you need — we\'ll take it from there.',
  },
  {
    title: 'Get a quote',
    desc: 'We give you a price based on your tank size and location. No hidden charges.',
  },
  {
    title: 'We show up and clean',
    desc: 'Our crew arrives with the tanker, connects equipment, and gets the job done.',
  },
  {
    title: 'Waste is disposed properly',
    desc: 'All waste goes to authorised treatment facilities. We don\'t cut corners on disposal.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="process" aria-label="How our service works">
      <div className="wrap how-grid">
        <div className="how-left">
          <h2>How it works.</h2>
          <p>Simple process, no complications. Most jobs are wrapped up within a couple of hours.</p>
          <div className="how-left-img">
            <img
              src="/about.png"
              alt="Septic tank maintenance work in progress"
              width="500"
              height="312"
              loading="lazy"
            />
          </div>
        </div>

        <div className="how-steps">
          {steps.map((s, i) => (
            <div className="how-step" key={i}>
              <div className="how-step-marker">{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
