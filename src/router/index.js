import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import DragonMaid from '@/components/DragonMaid';
import RemovePhone from '@/components/RemovePhone';
import GoogleLucky from '@/components/GoogleLucky';
import AppSettings from '@/components/AppSettings';
import MessageDialog from '@/components/MessageDialog';
import Slider from '@/components/Slider';
import DragUploader from '@/components/DragUploader';
import Github from '@/containers/Github';
import PlusOneSec from '@/components/PlusOneSec';

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
    {
      path: '/app-settings',
      name: 'AppSettings',
      component: AppSettings,
    },
    {
      path: '/message-dialog',
      name: 'MessageDialog',
      component: MessageDialog,
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider,
    },
    {
      path: '/drag-uploader',
      name: 'DragUploader',
      component: DragUploader,
    },
    {
      path: '/github',
      name: 'Github',
      component: Github,
    },
    {
      path: '/plus-one-sec',
      name: 'PlusOneSec',
      component: PlusOneSec,
    },
  ],
});
