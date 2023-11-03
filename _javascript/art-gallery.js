import Masonry from 'masonry-layout';

import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime, imgLazy } from './modules/plugins';

document.addEventListener('lazyloaded', function() {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // options
      itemSelector: '.grid-item'
    });
});

basic();
initSidebar();
initTopbar();
initLocaleDatetime();
imgLazy();
