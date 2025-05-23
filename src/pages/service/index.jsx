import DATA from "./_data_";
import _styles from "./_styles.module.css";

function Services() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>Our Services</h1>
      <div className={_styles.card_wraper}>
        {DATA.map((item) => {
          const { title, description } = item || {};
          return (
            <div key={title} className={_styles.card}>
              <h6 className={_styles.card__title}>{title}</h6>
              <p className={_styles.card__description}>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Services;
