import React, { memo } from "react";
import routes from "./routes";
import PublicRoute from "./public.jsx";

const Router = memo(() => {
  return (
    <React.Fragment>
      {routes.map((route, i) => {
        return <PublicRoute key={i} {...route} />;
      })}
    </React.Fragment>
  );
});

export default Router;
