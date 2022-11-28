/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */

import Collapse from './Collapse';
import Chat from './Chat';
import Like from './Like';

const collapse = new Collapse();
collapse.init();

const chat = new Chat();
chat.init();

const liker = new Like();
liker.init();
