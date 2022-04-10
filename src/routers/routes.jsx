import Home from "../component/home";

const routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    element: <Home />,
  },
];

export default routes;
