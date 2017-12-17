import React                from 'react';
import RouteWithSubRoutes   from '../../utils/routeWithSubRoutes';
import Header               from '../header';

const Surveys = ({ routes }) => {
  return (
    <div>
      <Header/>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route}/>
      ))}
    </div>
  );
};

export default Surveys;