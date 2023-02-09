import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/Error";
import Feed from "./pages/feed/feed";
import Home from "./pages/home/home";
import Groups from "./pages/groups/groups";
import Items from "./pages/items/items";
import Services from "./pages/services/services";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/feed',
        element: <Feed />,
      },
      {
        path: '/groups',
        element: <Groups />,
      },
      {
        path: '/items',
        element: <Items />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]);