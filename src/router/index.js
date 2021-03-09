import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';



// https://router.vuejs.org/guide/essentials/named-routes.html
// Sometimes it is more convenient to identify a route with a name, especially when linking to a route or performing navigations. 
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];


// https://router.vuejs.org/guide/essentials/named-views.html
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;