export default function About(){
  return (
    <section className="container">
      <div style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:18}}>
        <div>
          <h1>About Trinity Electric Syndicate</h1>
          <p className="lead">Trinity Electric Syndicate is a legacy electrical supplier based in Kalbadevi, Mumbai. Founded in the early 1917s, we have served builders, contractors and industrial customers for over a century.</p>

          <h3>Our Story</h3>
          <p>From a small storefront decades ago to a trusted supply partner for major builders, our focus has always been on product authenticity, quick deliveries and long-term relationships.</p>

          <h3>What We Provide</h3>
          <ul>
            <li>Switchgear (MCB, RCCB, MCCB, ACB)</li>
            <li>Cables & Wires (Polycab, KEI, RR)</li>
            <li>Electrical Accessories & Tools</li>
            <li>BOQ & contractor support</li>
          </ul>
        </div>

        <aside className="card">
          <img src="/images/legacy1.jpg" alt="legacy" style={{width:"100%",borderRadius:8,marginBottom:12}}/>
          <div style={{fontWeight:800}}>Trusted By Contractors</div>
          <div className="small">We work with 200+ contractors in Mumbai, offering priority deliveries and dedicated WhatsApp support.</div>
        </aside>
      </div>
    </section>
  );
}
