import { Link } from "react-router-dom";

import { OutlinedButton } from "components/widgets/buttons";
import { ArrowRightIcon } from "assets/icons";

import { NOT_FOUND } from "assets/images";

import _styles from "./_styles.module.css";

function NotFound() {
  return (
    <div className={_styles.container}>
      <img src={NOT_FOUND} alt="Not found" className={_styles.img_cover} />
      <h1 className={_styles.title}>Nothing to see here!</h1>
      <Link to="/">
        <OutlinedButton endIcon={ArrowRightIcon} className={_styles.action_button}>
          Go Home
        </OutlinedButton>
      </Link>
    </div>
  );
}

export default NotFound;
