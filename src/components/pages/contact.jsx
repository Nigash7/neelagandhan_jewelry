function Contact() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Contact Us</h2>

      <p><b>Shop Name:</b> Neelagandhan Jewelry</p>
      <p><b>Phone:</b> +91 9500913836</p>
      <p><b>Address:</b>Mylode, Alencode po, kk District </p>

      <a
        href="https://wa.me/916385498496"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp Us
      </a>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    textAlign: "center",
  },
  title: {
    color: "#D4AF37",
  },
  whatsapp: {
    display: "inline-block",
    marginTop: "20px",
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Contact;
