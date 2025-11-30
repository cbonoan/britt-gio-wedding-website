import "../styles/Introduction.scss";

export function Introduction() {
  return (
    <>
      <div
        id="introduction"
        style={{
          backgroundImage: "url('/images/83.jpg')",
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          }}
        />

        {/* Text content */}
        <div style={{ zIndex: 2, textAlign: "center" }}>
          <h4 className="date-text text-on-dark">05.30.2026</h4>
          <h1 className="text-on-dark">
            Brittney <br />&<br /> Giordan
          </h1>
          <h4 className="announcement-text text-on-dark">
            We're getting married!
          </h4>
        </div>
      </div>
    </>
  );
}
