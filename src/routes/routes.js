import config from "~/config";
import Home from "~/pages/Home";
import About from "~/pages/About";
import Blog from "~/pages/Blog";
import Contact from "~/pages/Contact";
import Location from "~/pages/Location";

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.about,
        component: About,
    },
    {
        path: config.routes.location,
        component: Location,
    },

    {
        path: config.routes.blog,
        component: Blog,
    },

    {
        path: config.routes.contact,
        component: Contact,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
