export default function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px' }} className="wrap">
      <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', marginBottom: '24px' }}>Privacy Policy</h1>
      <div style={{ color: 'var(--stone)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '16px' }}>Last updated: {new Date().toLocaleDateString()}</p>
        <p style={{ marginBottom: '16px' }}>
          At Shudhi Septic Tank Cleaning, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect the data you provide to us when using our services.
        </p>

        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '24px', marginTop: '32px', marginBottom: '16px', color: 'var(--dark)' }}>1. Information We Collect</h2>
        <p style={{ marginBottom: '16px' }}>
          We collect basic information required to provide our services, which may include your name, phone number, service address, and specific details about the service required. This information is typically collected when you call us, message us on WhatsApp, or fill out a form.
        </p>

        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '24px', marginTop: '32px', marginBottom: '16px', color: 'var(--dark)' }}>2. How We Use Your Information</h2>
        <p style={{ marginBottom: '16px' }}>
          The information we collect is used exclusively for:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
          <li>Scheduling and providing our septic cleaning services at your location.</li>
          <li>Communicating with you regarding your service requests, quotes, or inquiries.</li>
          <li>Improving our services and internal operations.</li>
        </ul>

        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '24px', marginTop: '32px', marginBottom: '16px', color: 'var(--dark)' }}>3. Information Sharing</h2>
        <p style={{ marginBottom: '16px' }}>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
        </p>

        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '24px', marginTop: '32px', marginBottom: '16px', color: 'var(--dark)' }}>4. Data Security</h2>
        <p style={{ marginBottom: '16px' }}>
          We implement a variety of security measures to maintain the safety of your personal information when you contact us or request a service.
        </p>

        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '24px', marginTop: '32px', marginBottom: '16px', color: 'var(--dark)' }}>5. Contact Us</h2>
        <p style={{ marginBottom: '16px' }}>
          If there are any questions regarding this privacy policy, you may contact us using the information below:
        </p>
        <p>
          <strong>Shudhi Septic Tank Cleaning</strong><br/>
          Phone: +91 9292241065<br/>
          Email: shudhiseptictankcleaning@gmail.com
        </p>
      </div>
    </div>
  )
}
