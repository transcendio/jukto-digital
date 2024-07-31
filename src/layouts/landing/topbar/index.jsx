import { useState } from "react";

import { Dialog } from "@headlessui/react";

import { Link } from "react-router-dom";
import TOP_NAV_ITEMS from "routes/navigations/topbar";
import { IconButton } from "components/widgets/buttons";
import { CloseIcon, MenuIcon } from "assets/icons";


import { APP_LOGO } from "assets/images";

import SITE_CONFIG from "data/site.config";

import _styles from "./_styles.module.css";

function Topbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(true);
  };
  const handleCloseMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const FILTERED_MENUS = TOP_NAV_ITEMS;

  return (
    <header className={_styles.header}>
      <nav className={_styles.navbar} aria-label="global">
        <Link to="/">
          <img className={_styles.logo} src={APP_LOGO} alt={SITE_CONFIG.title} />
        </Link>
        {/* mobile button*/}
        <IconButton
          className={_styles.mobile_menu_button}
          onClick={handleOpenMobileMenu}
          icon={MenuIcon}
        />
        {/* desktop */}
        <div className={_styles.nav_items}>
          {FILTERED_MENUS?.map((item, index) => (
            <Link to={item.path} key={item.title} className={_styles.nav_link}>
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      {/* mobile */}
      <Dialog
        as="aside"
        open={openMobileMenu}
        onClose={setOpenMobileMenu}
        className={_styles.mobile_menu_root}>
        <div className={_styles.mobile_menu_header}>
          <Link to="/">
            <img className={_styles.logo} src={APP_LOGO} alt={SITE_CONFIG.title} />
          </Link>
          <IconButton
            className={_styles.mobile_menu}
            onClick={handleCloseMobileMenu}
            icon={CloseIcon}
          />
        </div>
        <div className={_styles.mobile_menu_container}>
          <div className={_styles.mobile_menu_items}>
            {FILTERED_MENUS?.map((item, index) => (
              <Link to={item.path} key={item.title} className={_styles.nav_link}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Dialog>
    </header>
  );
}

export default Topbar;
