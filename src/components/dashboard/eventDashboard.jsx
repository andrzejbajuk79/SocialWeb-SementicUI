import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

import EventList from '../eventList/eventList';
import EventForm from '../eventForm/eventForm';
import { Events } from './../../data/events';
import cuid from 'cuid';

class EventDashboard extends Component {
	state = {
		events: Events,
		isOpen: false,
		selectedEvent: null
	};

	// handleIsOpenToggle = () => {
	// 	this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
	// };

	handleCreateFormOpen = () => {
		this.setState({ isOpen: true, selectedEvent: null })
	}
	handleFormCancel = () => {
		this.setState({ isOpen: false })
	}

	handleCreateEvent = newEvent => {
		newEvent.id = cuid();
		newEvent.hostPhotoURL = 'assets/images/user.png';
		this.setState(({ events }) => ({
			events: [...events, newEvent],
			isOpen: false
		}));
	};
	handleSelectEvent = (event) => {
		console.log(event);
		this.setState({ selectedEvent: event, isOpen: true });

	}
	handleUpdateEvent = (updatedEvent) => {
		this.setState(({ events }) => ({
			events: events.map(event => {
				if (event.id === updatedEvent.id) {
					return { ...updatedEvent }
				} else {
					return event
				}
			}),
			isOpen: false,
			selectedEvent: null
		}))
	}
 handledeleteEvent = id => {
	 this.setState(({events})=>({
		 events: events.filter(e =>e.id !== id)
	 }))
 }
	render() {
		const { events, isOpen, selectedEvent } = this.state;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList
						events={events}
						deleteEvent={this.handledeleteEvent}
						selectEvent={this.handleSelectEvent} />
				</Grid.Column>
				<Grid.Column width={6}>
					<Button
						onClick={this.handleCreateFormOpen}
						positive
						content="Create Event"
					/>
					{isOpen && (
						<EventForm
						//zeby formularz sie aktualizowal w  zaleznosci od kliknietego
						//eventu w dashbordzie musimy dac unikalny KEY parametr
							key={selectedEvent ? selectedEvent.id : 0}
							updateEvent={this.handleUpdateEvent }
							selectedEvent={selectedEvent}
							createEvent={this.handleCreateEvent}
							cancelFormOpen={this.handleFormCancel}
						/>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}

export default EventDashboard;
