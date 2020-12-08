import { AppRegistry } from 'react-360';
import TopPosts from './TopPosts';
import CurrentPost from './CurrentPost';
import ModelView from './ModelView';
import * as Store from './Store';
Store.initialize('AIzaSyD73sLB5fH95uEOsuqPXSWy1d0VEaOre34');

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('ModelView', () => ModelView);