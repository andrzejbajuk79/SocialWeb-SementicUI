import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListUsed extends Component {
	render() {
		const { name, photoURL } = this.props.attendee;
		return (
			<List.Item>
				<Image
					as="a"
					size="mini"
					circular
					src={photoURL}
				/>
			</List.Item>
		);
	}
}

export default EventListUsed;
