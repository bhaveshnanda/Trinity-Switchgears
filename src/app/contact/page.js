import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className="container">
      <h1 className={styles.mid}>Contact Us</h1>

      <div className={styles.contactGrid}>
        <div>
          <div className="card">
            <h3>Visit Us</h3>
            <div>154, Shamaldas Gandhi Marg, Kalbadevi, Mumbai 400002</div>
            <div style={{ marginTop: 8 }}>
              <strong>Phone:</strong> +91 8652859663
            </div>
            <div>
              <strong>Email:</strong> sales@trinityswitchgear.com
            </div>
            <div style={{ marginTop: 8 }} className="small">
              Hours: Mon–Sat 9:30 AM – 7:00 PM
            </div>
          </div>

          <div style={{ marginTop: 12 }} className="card">
            <h3>Send BOQ</h3>
            <p>
              Send your BOQ file via WhatsApp or email for a quick quote. We
              respond quickly to contractor BOQs.
            </p>
            <a
              className="btn btn-primary"
              href="https://wa.me/918652859663?text=Sending%20BOQ"
            >
              Send BOQ (WhatsApp)
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h3>Find Us</h3>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb="
              style={{ width: "100%", height: 260, border: 0, borderRadius: 8 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
