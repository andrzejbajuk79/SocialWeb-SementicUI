import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/store/configureStore';
import  ScrollToTop from './common/util/scrollToTop';

const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollToTop >
				<App />
			</ScrollToTop>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();

