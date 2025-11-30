import "../styles/RSVP.scss";

export function RSVP() {
  return (
    <section id="rsvp">
      <h2>
        We hope you'll join <br /> us on this special day!
      </h2>
      <button
        className="rsvp-button"
        onClick={() => window.open("https://google.com", "_blank")}
        style={{
          background:
            "linear-gradient(135deg, var(--sage-green), var(--dusty-rose))",
          padding: "1rem 2.5rem",
          fontSize: "1.2rem",
          border: "none",
          cursor: "pointer",
          margin: "2rem auto",
          fontWeight: "600",
          boxShadow: "0 4px 15px rgba(142, 139, 99, 0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 6px 20px rgba(142, 139, 99, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 15px rgba(142, 139, 99, 0.2)";
        }}
      >
        RSVP
      </button>
    </section>
  );
}
