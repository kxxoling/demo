import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import DragonMaid from '@/components/DragonMaid';
import RemovePhone from '@/components/RemovePhone';
import GoogleLucky from '@/components/GoogleLucky';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/dragon-maid',
      name: 'DragonMaid',
      component: DragonMaid,
    },
    {
      path: '/remove-phone',
      name: 'RemovePhone',
      component: RemovePhone,
    },
    {
      path: '/im-feeling-lucky',
      name: 'GoogleLucky',
      component: GoogleLucky,
    },
  ],
});
