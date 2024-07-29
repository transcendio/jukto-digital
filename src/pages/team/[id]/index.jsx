import { NotFound } from "components/modules/errors";

import { EmailIcon, LinkdinIcon, PhoneIcon } from "assets/icons";

import useNavigation from "hooks/useNavigation";

import TEAM_MEMBERS from "../_data_";
import _styles from "./_styles.module.css";

function TeamByID() {
  const { params } = useNavigation();
  const teamId = params?.id;

  const targed_meamber = TEAM_MEMBERS.find(({ id }) => teamId === id);

  if (!targed_meamber) return <NotFound />;

  const { name, designation, phone, email, image, linkdin } = targed_meamber || {};

  return (
    <section className={_styles.container}>
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
    </section>
  );
}
export default TeamByID;
