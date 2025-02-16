import HOME_ROUTE from "./home";
import TEAM_ROUTE from "./team";
import CONTACT_ROUTE from "./contact";
import SERVICE_ROUTE from "./service";
import PRODUCTS_ROUTE from "./products";

const BROWSE_ROUTE = [
  ...HOME_ROUTE,
  ...TEAM_ROUTE,
  ...CONTACT_ROUTE,
  ...SERVICE_ROUTE,
  ...PRODUCTS_ROUTE,
];

export default BROWSE_ROUTE;
