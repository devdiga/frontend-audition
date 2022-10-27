import './functions/infiniteScroll';
import './functions/search';
import './functions/menu';
import { getPost } from './provider/placeholderProvider.js';
import '/src/assets/page.css';
import '/src/assets/page.mobile.css';
import '/src/assets/page.list.css';

getPost().catch(console.log)