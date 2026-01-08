import Img from '../../assets/appaimg.jpeg'
function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>About Us</h2>

      <p style={styles.text}>
        Neelagandhan Jewelry is a family-owned gold jewelry business with 25+ years
        of experience in traditional and custom-made gold ornaments.
      </p>

      <p style={styles.text}>
        We specialize in handcrafted gold rings, chains, bangles, and wedding
        jewelry. Every piece is made with care, purity, and attention to detail.
      </p>

      <p style={styles.text}>
        Our goal is to provide trusted quality, honest workmanship, and beautiful
        designs that customers can cherish for a lifetime.
      </p>

      <p style={styles.highlight}>
        ✔ Custom designs available  
        <br />
        ✔ Pure gold workmanship  
        <br />
        ✔ Trusted family business
      </p>
      <img style={styles.founder} src={Img} alt="founder" />
      <h3>Founder: N.Ramaswamy</h3>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
  },
  title: {
    color: "#D4AF37",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  highlight: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  founder:{
    width: "300px",
    marginTop: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

  }
};

export default About;
