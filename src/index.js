import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/store/configureStore';

const store = configureStore();
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();

// const el = document.getElementById('root');
// let render = () => {
// 	ReactDOM.render(<App />, el);
// };

// if (module.hot) {
//   module.hot.accept('./app/App',()=> {
//     setTimeout(render)
//   })
// }