import { Link } from "react-router-dom";

import { OutlinedButton } from "components/widgets/buttons";
import { ArrowRightIcon } from "assets/icons";

import { CUSTOMER } from "assets/images";

import _styles from "./_styles.module.css";

const About = () => {
  return (
    <section className={_styles.container}>
      <div className={_styles.column_wraper}>
        <h1 className={_styles.title}>
          Best <span> Software Agency</span> in the Town
        </h1>
        <h2 className={_styles.sub_title}>
          Since 2017 <span className={_styles.vertical_bar}></span>
        </h2>
        <p className={_styles.description}>
          Pleasure rationally encounter consequences that are extremely painful. Nor
          again is there anyone who loves or pursues or desires to obtain
        </p>
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
      <img src={CUSTOMER} alt="about" className={_styles.img_cover} />
    </section>
  );
};

export default About;
