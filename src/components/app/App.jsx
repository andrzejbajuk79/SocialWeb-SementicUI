import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';


import EventDashboard from '../dashboard/eventDashboard';
import NavBar from '../navbar/navbar';
import HomePage from '../pages/home/homePage';
import EventDetailPage from '../pages/eventDetails/eventDetailPage';
import PeopleDashboard from './../pages/user/peopleDashboard/peopleDashboard';
import UserDetailPage from './../pages/user/userDetail/userDetailPage';
import SettingDashboard from './../pages/user/settings/settingDashboard';
import EventForm from './../eventForm/eventForm';



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
						</Container>
					</Fragment>
				)} />
			</Fragment>

		);
	}
}

export default App;
