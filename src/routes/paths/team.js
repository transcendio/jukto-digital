import Team from "pages/team";
import TeamByID from "pages/team/[id]";

const TEAM_ROUTE = [
  {
    path: "/team",
    component: Team,
    is_authenticated: false,
  },
  {
    path: "/team/:id",
    component: TeamByID,
    is_authenticated: false,
  },
];

export default TEAM_ROUTE;
