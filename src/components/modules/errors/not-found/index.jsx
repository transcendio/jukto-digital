import { NOT_FOUND } from "assets/images";

import _styles from "./_styles.module.css";

function NotFound() {
  return (
    <div className={_styles.container}>
      <img src={NOT_FOUND} alt="Not found" className={_styles.img_cover} />
    </div>
  );
}

export default NotFound;
