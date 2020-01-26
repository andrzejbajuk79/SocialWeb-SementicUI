import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root');
let render = () => {
	ReactDOM.render(<App />, el);
};

// if (module.hot) {
//   module.hot.accept('./app/App',()=> {
//     setTimeout(render)
//   })
// }
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
