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

  const { name, designation, phone, email, image, linkdin, about_me } =
    targed_meamber || {};

  return (
    <>
      <section className={_styles.section}>
        <div className={_styles.container}>
          <div className={`${_styles.image_container} flex justify-center`}>
            <img src={image} alt="img" className={_styles.img} />
          </div>
          <div className={`${_styles.info_container}`}>
            <div className={`${_styles.detail_container}`}>
              <span className={`${_styles.job_title}`}>{designation}</span>
              <h1 className={`${_styles.name_title}`}>{name}</h1>
              <p>
                {about_me ||
                  ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio
                rerum reprehenderit dolore. Ad nulla fugit numquam est accusamus
                natus ullam molestias harum sequi sapiente. Deleniti dignissimos
                cumque soluta atque.`}
              </p>
            </div>
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
        </div>
      </section>
    </>
  );
}
export default TeamByID;
