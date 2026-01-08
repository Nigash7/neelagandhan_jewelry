import Ring from "../../assets/ring.jpg";
import Chain from "../../assets/Chine.jpg";
import Custom from "../../assets/custom.jpg";



function Gallery() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Our Jewelry Designs</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img src={Ring} style={styles.img} />
          <p>Gold Rings</p>
        </div>

        <div style={styles.card}>
          <img src={Chain} style={styles.img} />
          <p>Gold Chains</p>
        </div>

        <div style={styles.card}>
          <img src={Custom} style={styles.img} />
          <p>Custom Jewelry</p>
        </div>
      </div>

      <p style={styles.note}>
        All designs can be customized. Please visit our shop.
      </p>
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
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    width: "200px",
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  note: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default Gallery;
