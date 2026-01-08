function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Neelagandhan Jewelry</h2>
     
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#0000001c",
    color: "#D4AF37",
  },
  logo: {
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
};

export default Navbar;
