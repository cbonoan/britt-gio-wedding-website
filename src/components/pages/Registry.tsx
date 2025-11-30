import "../../styles/Registry.scss";

export const Registry = () => {
  return (
    <section id="registry">
      <div className="registry-container">
        <header className="registry-header">
          <h2 className="text-primary">Registry</h2>
          <div className="divider" aria-hidden />
        </header>

        <div className="registry-card">
          <div className="registry-info">
            <h3 className="text-secondary">
              Your presence is the greatest gift
            </h3>

            <p className="text-subtle">
              We are so grateful that you'll be with us on our wedding day. If
              you'd like to create something special, we've put together a
              registry to help friends and family choose a thoughtful gift.
            </p>

            <div className="registry-actions">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="registry-button btn-primary"
                aria-label="View our registry"
              >
                View Our Registry
              </a>
            </div>

            <p className="registry-quote announcement-text">
              We are grateful for your love and support as we begin this new
              chapter together.
            </p>
          </div>

          <div
            className="registry-visual"
            role="img"
            aria-label="Decorative wedding photo"
          />
        </div>
      </div>
    </section>
  );
};
