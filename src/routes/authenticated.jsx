// import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { useUserContext } from "store/context/user";

const Authenticated = ({
  is_authenticated = false,
  redirect_to = "/login",
  children,
}) => {
  const { is_login } = useUserContext();

  if (!is_authenticated) {
    return <>{children}</>;
  }

  if (is_login) {
    return <>{children}</>;
  }

  return <Navigate to={redirect_to} replace={true} />;
};

Authenticated.propTypes = {
  children: PropTypes.node,
  redirect_to: PropTypes.string,
  is_authenticated: PropTypes.bool,
};

export default Authenticated;
