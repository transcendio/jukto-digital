import CONTACT_ROUTE from "./contact";
import HOME_ROUTE from "./home";
import SERVICE_ROUTE from "./service";
import TEAM_ROUTE from "./team";

const BROWSE_ROUTE = [
  ...HOME_ROUTE,
  ...TEAM_ROUTE,
  ...CONTACT_ROUTE,
  ...SERVICE_ROUTE,
];

export default BROWSE_ROUTE;
