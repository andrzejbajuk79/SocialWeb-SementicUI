import React, { Component, Fragment } from 'react';
import EventListItem from './eventListItem';

class EventList extends Component {

render() {

	const { events, selectEvent,deleteEvent } = this.props
	return (
		<Fragment>
			{events.map(event => (
				<EventListItem 
				key={event.key}
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
