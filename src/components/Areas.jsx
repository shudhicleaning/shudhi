export default function Areas() {
  const districts = ['Kasaragod', 'Kannur', 'Kozhikode']

  return (
    <section className="areas" id="areas" aria-label="Service areas">
      <div className="wrap">
        <h2>Areas we serve</h2>
        <p>Covering the northern districts of Kerala. Prompt service across all major towns.</p>
        <div className="areas-tags">
          {districts.map((d, i) => <span key={i}>{d}</span>)}
        </div>
      </div>
    </section>
  )
}
