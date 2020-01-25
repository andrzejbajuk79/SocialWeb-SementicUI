import React, { Component, Fragment } from 'react';
import EventListItem from './eventListItem';

class EventList extends Component {
	render() {
		const { events } = this.props;

		return (
			<Fragment>
				{events.map(event => (
					<EventListItem  key={event.key} event={event}/>
				))}
			</Fragment>
		);
	}
}

export default EventList;
