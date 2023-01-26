import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/Error";
import Feed from "./pages/feed/feed";
import Home from "./pages/home/home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/pages/home/home',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/pages/feed/feed',
        element: <Feed />,
        errorElement: <Error />,
      },
    ],
  },
]);