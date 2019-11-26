
/*
 * This is the main script file of your app.
 *
 * Just like the 'app.scss' file for SASS, all you need to import is here.
 *
 * Feel free to separate your scripts in additional files and load them from
 * here. This way, you'll keep your logic organised and it'll be easier to
 * maintain the project codebase.
 */

/*
 * --
 * Dependencies
 * --
 *
 * Here some external libraries are loaded: jQuery, Popper.js, and Bootstrap.
 *
 * You're not required to use any of them in your project. But keep in mind
 * those libraries depend on each other in the inverse order they're loaded.
 * Removing one of them, means breaking all other below.
 *
 * Notice some libraries are attached to the browser's global scope (window
 * object). This means they're avaiable to all contexts, including new files you
 * may create and also to external libraries. This is how Bootstrap scripts hook
 * themselves to jQuery, for example.
 */
window.$ = window.jQuery = require('jquery');

import Popper from 'popper.js';
window.Popper = Popper;

require('bootstrap');
