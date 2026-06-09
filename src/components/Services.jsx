const services = [
  {
    name: 'Septic Tank Cleaning',
    desc: 'Full emptying and internal cleaning of residential and commercial septic tanks using vacuum trucks.',
  },
  {
    name: 'Septic Tank Pumping',
    desc: 'Removal of accumulated sludge and wastewater from tanks of all sizes.',
  },
  {
    name: 'Drainage & Sewer Line Clearing',
    desc: 'Unblocking kitchen drains, bathroom lines, and main sewage pipes using high-pressure jetting.',
  },
  {
    name: 'Soak Pit / Leach Pit Cleaning',
    desc: 'Restoring drainage capacity in soak pits that have clogged over time.',
  },
  {
    name: 'Emergency Overflow Service',
    desc: 'Immediate response for overflowing tanks — available daily from 6 AM to 9 PM, weekends and holidays included.',
  },
  {
    name: 'Scheduled Maintenance',
    desc: 'Periodic cleaning plans for apartments, villas, and commercial properties.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services" aria-label="Services offered">
      <div className="wrap">
        <div className="services-header">
          <div className="services-header-text">
            <h2>What we do.</h2>
          </div>
          <p>
            Straightforward septic and drainage services 
            for homes, apartments, and businesses.
          </p>
        </div>

        <div className="svc-list">
          {services.map((s, i) => (
            <div className="svc-row" key={i}>
              <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="svc-name">{s.name}</div>
              <div className="svc-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
