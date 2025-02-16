import { LinkButton } from "components/widgets/buttons";

import SITE_CONFIG, { SOCIAL_CONTACTS } from "data/site.config";

import _styles from "./_styles.module.css";

function Bottombar() {
  return (
    <footer className={_styles.footer}>
      <section className={_styles.container}>
        <div className={_styles.logo_container}>
          <h1 className={_styles.logo_title}>{SITE_CONFIG.title}</h1>
          <p className={_styles.description}>{SITE_CONFIG.description}</p>
          <div className={_styles.social_icons}>
            {SOCIAL_CONTACTS?.map(({ link, icon: Icon }, index) => (
              <a href={link} key={index} className={_styles.social_link}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className={_styles.section_container}>
          <div className={_styles.link_container}>
            <h2 className={_styles.link_title}>Contacts</h2>
            <LinkButton href={`mailto:${SITE_CONFIG.contacts.email}`}>
              Email:<span> {SITE_CONFIG.contacts.email}</span>
            </LinkButton>
            <LinkButton href={`tel:${SITE_CONFIG.contacts.phone}`}>
              Phone:<span>{SITE_CONFIG.contacts.phone}</span>
            </LinkButton>
            <LinkButton href={SITE_CONFIG.contacts.map_link}>
              Address:<span> {SITE_CONFIG.contacts.address}</span>
            </LinkButton>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Bottombar;
