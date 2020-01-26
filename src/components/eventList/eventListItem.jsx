import React, { Component } from 'react';
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react';
import EventListUsed from './eventListUsed';

class EventListItem extends Component {
	render() {
		const { event, selectEvent, deleteEvent } = this.props;
		const {
			title, date, category, description, city, venue, hostedBy, hostPhotoURL, attendees
		} = this.props.event;
		return (
			<Segment.Group>
				<Segment>
					<Item.Group>
						<Item>
							<Item.Image
								size="tiny"
								circular
								src="https://randomuser.me/api/portraits/women/42.jpg"
							/>
							<Item.Content>
								<Item.Header >{title}</Item.Header>
								<Item.Description>
									Hosted by {hostedBy}
								</Item.Description>
							</Item.Content>
						</Item>
					</Item.Group>
				</Segment>
				<Segment>
					<span>
						<Icon name="clock" /> {date} |
						<Icon name="marker" /> {venue}
					</span>
				</Segment>
				<Segment secondary>
					<List horizontal>
						{attendees && attendees.map(attendee => (
							<EventListUsed key={attendee.id} attendee={attendee} />
						))}
					</List>
				</Segment>
				<Segment clearing>
					<span>{description}</span>
					<Button
						onClick={() => deleteEvent(event.id)}
						as="a"
						color="red"
						floated="right"
						content="Delete" />
					<Button
						onClick={() => selectEvent(event)}
						as="a"
						color="teal"
						floated="right"
						content="View" />

				</Segment>
			</Segment.Group>
		);
	}
}

export default EventListItem;
