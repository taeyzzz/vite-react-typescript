import {
  createBrowserRouter,
} from "react-router-dom";
import loadable from '@loadable/component'

const ContactPageLoadable = loadable(() => import("../pages/ContactPage"))
const HomePageLoadable = loadable(() => import("../pages/HomePage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLoadable />
  },
  {
    path: "contact",
    element: <ContactPageLoadable />,
  },
])

export default router