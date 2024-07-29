import { EmailIcon, LocationIcon, PhoneIcon } from "assets/icons";
import SITE_CONFIG from "data/site.config";


import _styles from "./_styles.module.css";

function Contact() {
  return (
    <section className={_styles.container}>
      <h1 className={_styles.title}>Contact Us</h1>
      <div className={_styles.card_wraper}>
        <div className={_styles.card}>
          <div className={_styles.icon}>
            <PhoneIcon />
          </div>
          <h2 className={_styles.card__title}>Phone</h2>
          <p className={_styles.card__description}>{SITE_CONFIG.contacts.phone}</p>
        </div>
        <div className={_styles.card}>
          <div className={_styles.icon}>
            <EmailIcon />
          </div>
          <h2 className={_styles.card__title}>Email</h2>
          <p className={_styles.card__description}>{SITE_CONFIG.contacts.email}</p>
        </div>
        <div className={_styles.card}>
          <div className={_styles.icon}>
            <LocationIcon />
          </div>
          <h2 className={_styles.card__title}>Address</h2>
          <p className={_styles.card__description}>{SITE_CONFIG.contacts.address}</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
