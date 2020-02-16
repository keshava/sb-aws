import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import Applications from './views/Applications.vue';
import NewApplication from './views/NewApplication.vue';
import ViewApplication from './views/ViewApplication.vue';
import EditApplication from './views/EditApplication.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        checkAuth: false,
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications,
      meta: {
        breadcrumb: [
          {
            text: 'My SDU Sandbox Apps',
            active: true,
          },
        ],
        checkAuth: true,
      },
    },
    {
      path: '/applications/new',
      name: 'new-application',
      component: NewApplication,
      meta: {
        breadcrumb: [
          {
            text: 'My Sandbox Apps',
            to: { name: 'applications' },
          },
          {
            text: 'Publish a SDU App Sandbox',
            active: true,
          },
        ],
        checkAuth: true,
      },
    },
    {
      path: '/applications/:id',
      name: 'view-application',
      component: ViewApplication,
      meta: {
        breadcrumb: [
          {
            text: 'My Sandboxes',
            to: { name: 'applications' },
          },
          {
            text: 'SDU Sandbox App details',
            active: true,
          },
        ],
        checkAuth: true,
      },
    },
    {
      path: '/applications/:id/edit',
      name: 'edit-application',
      component: EditApplication,
      meta: {
        breadcrumb: [
          {
            text: 'My SDU Sandbox Apps',
            to: { name: 'applications' },
          },
          {
            text: 'Edit SDU Sandbox App',
            active: true,
          },
        ],
        checkAuth: true,
      },
    },
  ],
});
