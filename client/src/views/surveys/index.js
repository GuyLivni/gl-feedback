/* @flow */
import React from "react";
import RouteWithSubRoutes from "../../utils/routeWithSubRoutes";
import Header from "../../components/header";

type Props = {
  routes: Object
};

const Surveys = ({ routes }: Props) => {
  return (
    <div>
      <Header />
      {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
    </div>
  );
};

export default Surveys;
