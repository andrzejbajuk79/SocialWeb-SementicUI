import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

import { connect } from 'react-redux'

import { updateEvent, createEvent } from '../eventActions'
import cuid from 'cuid';



const mapState = (state, ownProps) => {
	const eventId = ownProps.match.params.id;
	let event = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: ''
	}
	if (eventId && state.events.length > 0) {
		event = state.events.filter(event => event.id === eventId)[0]
	}
	return { event }
}

const actions = { updateEvent, createEvent }
class EventForm extends Component {
	state = { ...this.props.event };
	componentDidMount() {
		if (this.props.selectedEvent !== null) {
			this.setState({ ...this.props.selectedEvent })

		}
	}
	handleFormSubmit = e => {
		e.preventDefault();
		if (this.state.id) {
			this.props.updateEvent(this.state)
			this.props.history.push(`/events/${this.state.id}`)
		} else {
			const newEvent = {
				...this.state,
				id: cuid(),
				hostPhotoURL: 'assets/images/user.png'
			}
			this.props.createEvent(newEvent);
			this.props.history.push(`/events`)
		}

	};
	handleInputChange = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	};
	render() {
		const { title, date, city, venue, hostedBy } = this.state;
		return (
			//snippet  s_3_4_3
			<Segment>
				<Form autoComplete="off" onSubmit={this.handleFormSubmit}>
					<Form.Field>
						<label>Event Title</label>
						<input
							onChange={this.handleInputChange}
							name="title"
							value={title}
							placeholder="Event title"
						/>
					</Form.Field>

					<Form.Field>
						<label>Event Date</label>
						<input
							value={date}
							name="date"
							onChange={this.handleInputChange}
							type="date"
							placeholder="Event Date"
						/>
					</Form.Field>

					<Form.Field>
						<label>City</label>
						<input
							value={city}
							name="city"
							onChange={this.handleInputChange}
							placeholder="City event is taking place"
						/>
					</Form.Field>

					<Form.Field>
						<label>Venue</label>
						<input
							value={venue}
							name="venue"
							onChange={this.handleInputChange}
							placeholder="Enter the Venue of the event"
						/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input
							value={hostedBy}
							name="hostedBy"
							onChange={this.handleInputChange}
							placeholder="Enter the name of person hosting"
						/>
					</Form.Field>
					<Button positive type="submit">
						Dodaj
					</Button>
					<Button onClick={this.props.history.goBack} type="button">
						Anuluj
					</Button>
				</Form>
			</Segment>
		);
	}
}
export default connect(mapState, actions)(EventForm);

// <Form.Field>
// 	<label>Event Title</label>
// 	<input
// 		onChange={this.handleInputChange}
// 		name="title"
// 		value={title}
// 		placeholder="Event title"
// 	/>
// </Form.Field></Form.Field>

// <FormInput
// type="text"
// name="title"
// value={title}
// onChange={this.handleInputChange}
// label="Event Title"
// required
// />
