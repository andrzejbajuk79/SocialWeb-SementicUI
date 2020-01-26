import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';


import EventDashboard from './components/dashboard/eventDashboard';
import NavBar from './components/navbar/navbar';
import HomePage from './components/pages/home/homePage';
import EventDetailPage from './components/pages/eventDetails/eventDetailPage';
import PeopleDashboard from './components/pages/user/peopleDashboard/peopleDashboard';
import UserDetailPage from './components/pages/user/userDetail/userDetailPage';
import SettingDashboard from './components/pages/user/settings/settingDashboard';
import EventForm from './components/eventForm/eventForm';
import TestComponent from './playground/testComponent';



class App extends Component {
	render() {
		return (
			<Fragment>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/(.+)' render={() => (
					<Fragment>
						<NavBar />
						<Container className="main">
							<Route path='/events' component={EventDashboard} />
							<Route path='/events/:id' component={EventDetailPage} />
							<Route path='/people' component={PeopleDashboard} />
							<Route path='/profile/:id' component={UserDetailPage} />
							<Route path='/settings' component={SettingDashboard} />
							<Route path='/createEvent' component={EventForm} />
							<Route path='/test' component={TestComponent} />
						</Container>
					</Fragment>
				)} />
			</Fragment>

		);
	}
}

export default App;
