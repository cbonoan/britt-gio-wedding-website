import "../styles/OurStory.scss";

export function OurStory() {
  return (
    <>
      <section id="our-story">
        <h1>Our Story</h1>
        <div className="our-story-container">
          <div className="groom-section">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Bride</p>
            <h3>Brittney Solis</h3>
          </div>

          <div className="couple-image-section">
            <img
              src="/images/110.jpg"
              alt="Giovanni and Brittany"
              className="couple-image"
            />
          </div>

          <div className="bride-section">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Groom</p>
            <h3>Giordan Maramo</h3>
          </div>
        </div>
        <div className="our-story-text">
          <h3 style={{ fontSize: "1.5rem" }}>
            After catching each other’s eye across the room and spending the
            rest of the night finding out how much they have in common, they
            started dating. Two years later, we're best friends, true loves, and
            partners in crime. We're finally ready to make it official!
          </h3>
        </div>
      </section>
    </>
  );
}
