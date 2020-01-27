import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react';
import { connect } from 'react-redux'

import { createEvent, deleteEvent, updateEvent } from '../eventActions'
import EventList from '../eventList/eventList';


class EventDashboard extends Component {
	handleDeleteEvent = id => {
		this.props.deleteEvent(id)
	}
	render() {
		const { events } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList
						key={events.length}
						events={events}
						deleteEvent={this.handleDeleteEvent}
					/>
				</Grid.Column>
				<Grid.Column width={6}>
					<h2>Your Activity</h2>
				</Grid.Column>
			</Grid>
		);
	}
}
const actions = {
	createEvent,
	deleteEvent,
	updateEvent
}
const mapStateToProps = (state) => ({
	events: state.events
})
export default connect(mapStateToProps, actions)(EventDashboard);
