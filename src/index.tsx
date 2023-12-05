import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "@/pages/about/About.lazy";
import { LazyShop } from "@/pages/shop/Shop.lazy";
import { Suspense } from "react";
const root = document.getElementById("root");
if (!root) {
  throw new Error("root is not found");
}

const container = ReactDOM.createRoot(root as HTMLElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);
container.render(<RouterProvider router={router} />);
