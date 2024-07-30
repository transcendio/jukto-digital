import { Link } from "react-router-dom";

import { OutlinedButton } from "components/widgets/buttons";
import { ArrowRightIcon } from "assets/icons";

import DATA from "../_data";
import { COVER } from "assets/images";

import _styles from "./_styles.module.css";

const Header = () => {
  return (
    <section className={_styles.container}>
      <div className={_styles.column_wraper}>
        <h1 className={_styles.title}>
          Full Solution for your <span>Business</span> Development
        </h1>
        <p className={_styles.description}>{DATA?.header_section_description}</p>
        <div className={_styles.action_buttons}>
          <Link to="/contact">
            <OutlinedButton
              endIcon={ArrowRightIcon}
              className={_styles.action_button}>
              Get Started
            </OutlinedButton>
          </Link>
        </div>
      </div>
      <img src={COVER} alt="cover" className={_styles.img_cover} />
    </section>
  );
};

export default Header;
