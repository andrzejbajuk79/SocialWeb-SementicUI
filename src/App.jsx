import React, { Component, Fragment } from 'react';
import { Route, Switch,withRouter} from 'react-router-dom';
import { Container } from 'semantic-ui-react';


import TestComponent from './components/play/testComponent';
import NavBar from './components/navbar/navbar';
import {
	EventDetailPage,
	HomePage,
	UserDetailPage,
	PeopleDashboard,
	SettingDashboard,
	EventDashboard,
	EventForm,
} from './components'



class App extends Component {
	render() {
		return (
			<Fragment>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/(.+)' render={() => (
					<Fragment>
						<NavBar />
						<Container className="main">
							<Switch key={this.props.location.key}>
								<Route exact path='/events' component={EventDashboard} />
								<Route path='/events/:id' component={EventDetailPage} />
								<Route path='/people' component={PeopleDashboard} />
								<Route path='/profile/:id' component={UserDetailPage} />
								<Route path='/settings' component={SettingDashboard} />
								<Route path={['/createEvent', '/manage/:id']} component={EventForm} />
								<Route path='/test' component={TestComponent} />
							</Switch>

						</Container>
					</Fragment>
				)} />
			</Fragment>

		);
	}
}

export default withRouter(App);
