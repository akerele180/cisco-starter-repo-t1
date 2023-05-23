const Banner = () => {
  const styles = {
    h1: {
      fontSize: "10rem",
      color: "white",
      fontStretch: "ultra-condensed",
      letterSpacing: "3px",
      //   lineHeight: "1rem",
    },
    h2: { fontSize: "", color: "white", lineHeight: "5px" },
    p: { fontStyle: "italic" },
    wrapper: { padding: "3rem", textAlign: "center" },
  };
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.h1}>Sextant</h1>

      <p style={styles.p}>...where beauty meets top-notch experience</p>
    </div>
  );
};

export default Banner;
