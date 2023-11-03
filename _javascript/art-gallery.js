// import Masonry from 'masonry-layout';

import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime, imgLazy } from './modules/plugins';

$('.grid').masonry({
    // options
    itemSelector: '.grid-item'
});

basic();
initSidebar();
initTopbar();
initLocaleDatetime();
imgLazy();
