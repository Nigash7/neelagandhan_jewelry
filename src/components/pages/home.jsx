import bgGif from "../../assets/gif.gif";

function Home() {
  return (
    <section style={styles.section}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Traditional Gold Jewelry</h1>
        <p style={styles.text}>
          Handmade rings, chains, and custom gold designs
        </p>
        <a
  href="https://maps.app.goo.gl/cMVRvcpq6GjRDdfb7"
  target="_blank"
  rel="noopener noreferrer"
  style={styles.button}
>
  Visit Our Shop
</a> <a
        href="https://wa.me/916385498496"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp Us
      </a>

      
      </div>
    </section>
  );
}

const styles = {
  section: {
    height: "90vh",
    backgroundImage: `url(${bgGif})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    textAlign: "center",
    borderRadius: "10px",
  },
  title: {
    color: "#D4AF37",
    fontSize: "36px",
    marginBottom: "10px",
  },
  text: {
    color: "#fff",
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#D4AF37",
    border: "none",
    padding: "12px 25px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "black",
    textDecoration: "none",
    borderRadius: "5px",
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

export default Home;
