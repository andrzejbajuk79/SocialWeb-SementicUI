import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

import EventList from '../eventList/eventList';
import EventForm from '../eventForm/eventForm';
import { Events } from './../../data/events';

class EventDashboard extends Component {
	state = {
		events: Events,
		isOpen: false
	};

	handleIsOpenToggle = () => {
		this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
	};

	render() {
		const { events, isOpen } = this.state;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList events={events} />
				</Grid.Column>
				<Grid.Column width={6}>
					<Button
						onClick={this.handleIsOpenToggle}
						positive
						content="Create Event"
					/>
					{isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle} />}
				</Grid.Column>
			</Grid>
		);
	}
}

export default EventDashboard;
