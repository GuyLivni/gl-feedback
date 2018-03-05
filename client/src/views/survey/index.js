/* @flow */
import React, { Fragment } from "react";
import RouteWithSubRoutes from "../../utils/routeWithSubRoutes";
import Header from "../../components/header";

type Props = {
  routes: Object
};

const Surveys = ({ routes }: Props) => {
  return (
    <Fragment>
      <Header />
      {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
    </Fragment>
  );
};

export default Surveys;
