const items = [
  {title:"MCB 16A (Schneider)",sku:"TRI-SCH-MCB-16",brand:"Schneider",price:"₹350"},
  {title:"RCCB 63A (Havells)",sku:"TRI-HAV-RCCB-63",brand:"Havells",price:"₹1800"},
  {title:"MCCB 250A",sku:"TRI-MCCB-250",brand:"Various",price:"Call for price"}
];

export default function Switchgear(){
  return (
    <section className="container">
      <h1>Switchgear</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16,marginTop:12}}>
        {items.map(it=>(
          <div key={it.sku} className="card">
            <h3>{it.title}</h3>
            <div className="small">SKU: {it.sku}</div>
            <div style={{marginTop:8,fontWeight:700}}>{it.price}</div>
            <div style={{marginTop:12}}>
              <a className="btn btn-primary" href={`https://wa.me/91XXXXXXXXXX?text=Quote%20for%20${encodeURIComponent(it.title)}`}>Enquire on WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
