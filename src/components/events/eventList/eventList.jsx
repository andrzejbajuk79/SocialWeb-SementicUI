import React, { Component, Fragment } from 'react';
import EventListItem from './eventListItem';
// rcc
class EventList extends Component {

	render() {

		const { events, deleteEvent } = this.props
		return (
			<Fragment>
				{events.map(event => (
					<EventListItem
						key={event.id}
						deleteEvent={deleteEvent}
						event={event}				
					/>
				))}
			</Fragment>
		);
	}
}

export default EventList;
