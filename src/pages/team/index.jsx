import { EmailIcon, LinkdinIcon, PhoneIcon } from "assets/icons";

import DATA from "./_data_";
import _styles from "./_styles.module.css";

function Team() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>Team members</h1>
      <div className={_styles.card_wraper}>
        {DATA.map((item) => {
          const { name, id, designation, phone, email, image, linkedin } =
            item || {};
          return (
            <a href={`team/${id}`}>
              <div key={name} className={_styles.card}>
                <div className={_styles.image_container}>
                  <img src={image} alt="img" className={_styles.card__image} />
                </div>
                <h6 className={_styles.card__title}>{name}</h6>
                <p className={_styles.card__description}>{designation}</p>
                <div className={_styles.social_icons}>
                  {phone && (
                    <a href={`tel:${phone}`} className={_styles.social_link}>
                      <PhoneIcon />
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} className={_styles.social_link}>
                      <EmailIcon />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={`https://www.linkedin.com/in/${linkedin}`}
                      className={_styles.social_link}>
                      <LinkdinIcon />
                    </a>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Team;
