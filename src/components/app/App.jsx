import React, { Component, Fragment } from 'react';
import EventDashboard from '../dashboard/eventDashboard';
import NavBar from '../navbar/navbar';
import { Container } from 'semantic-ui-react';

class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Container className="main">
					<EventDashboard />
				</Container>
			</Fragment>
		);
	}
}

export default App;
