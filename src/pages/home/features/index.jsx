import { Link } from "react-router-dom";

import { OutlinedButton } from "components/widgets/buttons";
import { ArrowRightIcon } from "assets/icons";

import DATA from "./_data_";
import _styles from "./_styles.module.css";

const Features = () => {
  return (
    <section className={_styles.container}>
      <div className={_styles.column_center}>
        <h1 className={_styles.title}>
          We are <span>different</span> because...
        </h1>
        <p className={_styles.description}>{DATA.description}</p>
        <div className={_styles.action_buttons}>
          <Link to="/contact">
            <OutlinedButton
              endIcon={ArrowRightIcon}
              className={_styles.action_button}>
              Learn More
            </OutlinedButton>
          </Link>
        </div>
      </div>
      <div className={_styles.card_wraper}>
        {DATA.cards.map((item) => {
          const { image, title, description } = item || {};
          return (
            <div key={title} className={_styles.card}>
              <img src={image} alt="img" className={_styles.card__image} />
              <h6 className={_styles.card__title}>{title}</h6>
              <p className={_styles.card__description}>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
