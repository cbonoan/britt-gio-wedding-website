import "../../styles/DressCode.scss";

export const DressCode = () => {
  const examples = [
    { id: 2, image: "/images/dress_code2.jpg", alt: "Dress code example 2" },
    { id: 1, image: "/images/dress_code1.jpg", alt: "Dress code example 1" },
    { id: 3, image: "/images/dress_code3.jpg", alt: "Dress code example 3" },
    { id: 4, image: "/images/dress_code4.jpg", alt: "Dress code example 4" },
    { id: 5, image: "/images/dress_code5.jpg", alt: "Dress code example 5" },
    { id: 6, image: "/images/dress_code6.jpg", alt: "Dress code example 6" },
    { id: 7, image: "/images/dress_code7.jpg", alt: "Dress code example 7" },
    { id: 8, image: "/images/dress_code8.jpg", alt: "Dress code example 8" },
  ];

  return (
    <section id="dress-code" className="dress-code-section">
      <div className="dress-code-inner container">
        <h2>Dress Code</h2>
        <p className="lead">Confused on what to wear? Here are some ideas!</p>

        <div className="dress-masonry" role="gallery">
          {examples.map((item) => (
            <figure className="dress-item" key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                className="dress-image"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCode;
