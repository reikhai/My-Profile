import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

const PublicRoute = memo((props) => {
  return (
    <Routes>
      <Route {...props} />
    </Routes>
  );
});

export default PublicRoute;
