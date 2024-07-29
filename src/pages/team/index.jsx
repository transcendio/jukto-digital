import { EmailIcon, LinkdinIcon, PhoneIcon } from "assets/icons";

import DATA from "./_data_";
import _styles from "./_styles.module.css";

function Team() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>Team members</h1>
      <div className={_styles.card_wraper}>
        {DATA.map((item) => {
          const { name, designation, phone, email, image, linkdin } = item || {};
          return (
            <div key={name} className={_styles.card}>
              <img src={image} alt="img" className={_styles.card__image} />
              <h6 className={_styles.card__title}>{name}</h6>
              <p className={_styles.card__description}>{designation}</p>
              <div className={_styles.social_icons}>
                <a href={`tel:${phone}`} className={_styles.social_link}>
                  <PhoneIcon />
                </a>
                <a href={`mailto:${email}`} className={_styles.social_link}>
                  <EmailIcon />
                </a>
                <a
                  href={`https://www.linkedin.com/in/${linkdin}`}
                  className={_styles.social_link}>
                  <LinkdinIcon />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Team;
