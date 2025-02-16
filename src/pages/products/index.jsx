import DATA from "./_data_";
import _styles from "./_styles.module.css";

function Products() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>Our Products & Partners</h1>
      <div className={_styles.card_wraper}>
        {DATA.map((item) => {
          const { title, description, link } = item || {};
          return (
            <a
              key={title}
              className={_styles.card}
              href={link}
              target="_blank"
              rel="noopener noreferrer">
              <h6 className={_styles.card__title}>{title}</h6>
              <p className={_styles.card__description}>{description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Products;
