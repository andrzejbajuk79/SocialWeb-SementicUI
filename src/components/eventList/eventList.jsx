import React, { Component, Fragment } from 'react';
import EventListItem from './eventListItem';
// rcc
class EventList extends Component {

	render() {

		const { events, selectEvent, deleteEvent } = this.props
		return (
			<Fragment>
				{events.map(event => (
					<EventListItem
						key={event.id}
						deleteEvent={deleteEvent}
						event={event}
						selectEvent={selectEvent}
					/>
				))}
			</Fragment>
		);
	}
}

export default EventList;
