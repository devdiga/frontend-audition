import './functions/infiniteScroll';
import './functions/search';
import { getPost } from './provider/placeholderProvider.js';
import '/src/assets/page.css';

getPost().catch(console.log)