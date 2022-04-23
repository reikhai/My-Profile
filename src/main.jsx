import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const MasterLayout = lazy(() => import("./master"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="overlay">
            <div className="overlay__inner">
              <div className="overlay__content">
                <span className="spinner"></span>
              </div>
            </div>
          </div>
        }
      >
        <MasterLayout />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
