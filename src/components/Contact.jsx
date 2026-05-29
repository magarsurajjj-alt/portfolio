export default function Contact() {
  return (
    <section className="contact-terminal" id="contact">

      <h1 className="terminal-title">
        Get In <span>Touch</span>
      </h1>

      <p className="terminal-text">
        Open for SOC roles, penetration testing, bug bounty hunting & cybersecurity collaborations.
      </p>

      {/* INFO BLOCK */}
      <div className="terminal-info">

        <div className="info-card">
          <h4>Email</h4>
          <p>surajmagr39@gmail.com</p>
        </div>

        <div className="info-card">
          <h4>Phone Number</h4>
          <p>+977 9744398111</p>
        </div>

        <div className="info-card">
          <h4>Location</h4>
          <p>Nepal, Banke, Nepalgunj</p>
        </div>

      </div>

      {/* FORM */}
      <div className="terminal-box">

        <form
          className="terminal-form"
          action="https://formspree.io/f/xkoeyezv"
          method="POST"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            required
          ></textarea>

          <button type="submit">
            send_message
          </button>

        </form>

      </div>

    </section>
  );
}